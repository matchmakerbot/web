<script context="module">
	let channelsObj = {};
	let leaderboardObj = {};
	let choosenChannels = [];
	let selectedServer = {};
	let choosenChannel = {};
	let choosenLeaderboard = { data: [], total: 0 };

	const fetchChannels = async (id) => {
		const channelsReq = await fetch(`https://localhost:8080/api/v1/channels/guild/${id}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});

		return await channelsReq.json();
	};

	export const fetchLeaderboard = async (channel, skip) => {
		const response = await fetch(
			`https://localhost:8080/api/v1/leaderboards/${
				channel.queueMode === "solos" ? "solos" : "teams"
			}/channel/${channel.channelId}?skip=${skip}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		return await response.json();
	};

	export const onServerClick = async (id, servers) => {
		if (!Object.keys(channelsObj).includes(id)) {
			const channelsReq = await fetchChannels(id);

			channelsObj = { ...channelsObj, [id]: channelsReq };
		}
		selectedServer = servers.find((e) => e.id === id).name;

		choosenChannels = channelsObj[id];
	};

	export const onChannelClick = async (channel, skip) => {
		if (!Object.keys(leaderboardObj).includes(channel.channelId)) {
			const response = await fetchLeaderboard(channel, skip);

			leaderboardObj = { ...leaderboardObj, [channel.channelId]: response };
		}
		choosenChannel = channel;
		choosenLeaderboard = leaderboardObj[channel.channelId];
	};
</script>

<!-- svelte-ignore module-script-reactive-declaration -->
<script>
	import { goto } from "$app/navigation";
	import ServerList from "$lib/components/serverList.svelte";
	import ChannelList from "$lib/components/channelList.svelte";
	import Leaderboard from "$lib/components/leaderboard.svelte";
	import { Stretch } from "svelte-loading-spinners";

	let servers = [];
	let channels = [];
	let channelData = {};

	// @ts-ignore
	const discordOauth2Link = DISCORD_OAUTH2_LINK;

	const userDataAndServerList = (async () => {
		const cookieValidation = await fetch(`https://localhost:8080/api/v1/auth/validatecookie`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			mode: "cors",
			credentials: "include",
		});
		if (cookieValidation.status === 400) {
			goto(discordOauth2Link);
		}

		const serverListRequest = await fetch(
			`https://localhost:8080/api/v1/guilds/getguildsuserandbotisin`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
				mode: "cors",
				credentials: "include",
			}
		);

		const serverList = await serverListRequest.json();

		const userDataRequest = await fetch(`https://localhost:8080/api/v1/users/getuserdata`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			mode: "cors",
			credentials: "include",
		});

		const userData = await userDataRequest.json();

		return { serverList, userData };
	})();

	$: servers,
		(async () => {
			const channelsReq = await fetchChannels(servers[0]?.id);

			selectedServer = servers[0]?.name;

			channelsObj = { [servers[0]?.id]: channelsReq };

			choosenChannels = channelsReq;
		})();

	$: channels,
		(async () => {
			if (channels.length !== 0) {
				const firstLeaderboard = channels[0];
				if (!Object.keys(leaderboardObj).includes(firstLeaderboard.channelId)) {
					const response = await fetchLeaderboard(firstLeaderboard, 0);

					leaderboardObj = { ...leaderboardObj, [firstLeaderboard.channelId]: response };

					choosenChannel = firstLeaderboard;

					choosenLeaderboard = response;
					return;
				}
				choosenLeaderboard = leaderboardObj[firstLeaderboard.channelId];

				choosenChannel = firstLeaderboard;
			}
		})();
</script>

<div class="flex">
	{#await userDataAndServerList}
		<div class="grid place-items-center h-screen w-screen">
			<Stretch size="300" color="white" />
		</div>
	{:then actualUserDataAndServerList}
		<ServerList
			servers={actualUserDataAndServerList.serverList}
			userData={actualUserDataAndServerList.userData}
			onServerClickCallback={onServerClick}
		/>
		<ChannelList
			channels={choosenChannels}
			guildName={selectedServer}
			onChannelClickCallback={onChannelClick}
			{choosenChannel}
		/>
		<Leaderboard users={choosenLeaderboard} {channelData} />
	{/await}
</div>
