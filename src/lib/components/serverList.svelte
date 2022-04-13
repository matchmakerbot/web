<script>
	import ChannelList from "./channelList.svelte";
	import { tooltip } from "../tooltip/tooltip.js";

	export let servers = [];
	export let userData;
	let selectedServer;
	let channelsObj = {};
	let choosenChannels = [];

	const fetchChannels = async (id) => {
		const channelsReq = await fetch(`https://localhost:8080/api/v1/channels/guild/${id}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});

		return await channelsReq.json();
	};

	$: servers,
		(async () => {
			const channelsReq = await fetchChannels(servers[0].id);

			selectedServer = servers[0].name;

			channelsObj = { [servers[0].id]: channelsReq };

			choosenChannels = channelsReq;
		})();

	const getNewChannels = async (/** @type {string} */ id) => {
		if (!Object.keys(channelsObj).includes(id)) {
			const channelsReq = await fetchChannels(id);

			channelsObj = { ...channelsObj, [id]: channelsReq };
		}
		selectedServer = servers.find((e) => e.id === id).name;

		choosenChannels = channelsObj[id];
	};
</script>

<div
	class="bg-deep-500 flex justify-between items-center flex-col min-h-100vh children:m-3 children:w-50px"
>
	<div>
		{#each servers as server}
			<button title={server.name} on:click={() => getNewChannels(server.id)} use:tooltip>
				<img
					class="rounded-3xl"
					src={server.icon == null
						? "../../../static/servers/defaultserverlogo.png"
						: `https://cdn.discordapp.com/icons/${server.id}/${server.icon}.png`}
					alt=""
				/>
			</button>
		{/each}
	</div>
	<div class="flex flex-col">
		<div class="h-[2px] bg-deep-50 mb-2" />
		<img class="p-1 bg-deep-800 rounded-3xl mb-2" src="../../../static/userData/lang.png" alt="" />
		<img
			class="rounded-full"
			src={`https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.png`}
			alt=""
			title={userData.username}
			use:tooltip
		/>
	</div>
</div>

<ChannelList channels={choosenChannels} guildName={selectedServer} />
