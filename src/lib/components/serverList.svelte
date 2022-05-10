<script>
	import { locale } from "svelte-i18n";
	import { goto } from "$app/navigation";
	import Select from "svelte-select";

	import ChannelList from "./channelList.svelte";
	import { tooltip } from "../tooltip/tooltip.js";
	import { fullLang } from "/src/i18n.js";
	import { isHidden } from "/src/stores/leaderboard";

	export let servers = [];
	export let userData;
	let selectedServer;
	let channelsObj = {};
	let choosenChannels = [];

	const fetchChannels = async (id) => {
		const channelsReq = await fetch(`https://${HOST_NAME}:8080/api/v1/channels/guild/${id}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (/^(4|5)/.test(channelsReq.status)) {
			goto(`/error?code=${channelsReq.status}&data=${channelsReq.statusText}`);
		}

		return await channelsReq.json();
	};

	$: servers,
		(async () => {
			if (servers.length !== 0) {
				const channelsReq = await fetchChannels(servers[0].id);

				selectedServer = servers[0].name;

				channelsObj = { [servers[0].id]: channelsReq };

				choosenChannels = channelsReq;
			}
		})();

	const onServerClick = async (/** @type {string} */ id) => {
		if (!Object.keys(channelsObj).includes(id)) {
			const channelsReq = await fetchChannels(id);

			channelsObj = { ...channelsObj, [id]: channelsReq };
		}
		selectedServer = servers.find((e) => e.id === id).name;

		choosenChannels = channelsObj[id];
	};
</script>

<div
	class="bg-deep-500 flex justify-between items-center flex-col min-h-100vh children:m-3 children:w-50px <lg:{$isHidden &&
		'hidden'}"
>
	<div>
		{#each servers as server}
			<button title={server.name} on:click={() => onServerClick(server.id)} use:tooltip>
				<img
					class="rounded-3xl"
					src={server.icon == null
						? "/servers/defaultserverlogo.png"
						: `https://cdn.discordapp.com/icons/${server.id}/${server.icon}.png`}
					alt=""
				/>
			</button>
		{/each}
	</div>
	<div class="flex flex-col children:mb-2">
		<div class="h-[2px] bg-deep-50" />
		<div class="language">
			<Select
				on:select={(event) => ($locale = event.detail.value)}
				placeholder=""
				items={fullLang}
				isSearchable={false}
			/>
		</div>
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

<style>
	.language {
		background-image: url("/servers/lang.png");
		background-position: center;
		background-repeat: no-repeat;
		--border: 2px solid #394b8d;
		--borderRadius: 100%;
		--height: 50px;
		--inputColor: rgba(255, 255, 255, 0);
		color: rgba(255, 255, 255, 0);
		--background: rgba(255, 255, 255, 0);
		--listBackground: #394b8d;
		--listMaxHeight: 100vh;
		--listBorder: 2px solid #394b8d;
		--itemIsActiveBG: #394b8d;
		--itemHoverBG: #b9c2e3;
		--itemHoverColor: black;
		--itemColor: white;
		--clearSelectColor: rgba(255, 255, 255, 0);
		--borderFocusColor: #151d35;
		--indicatorColor: rgba(255, 255, 255, 0);
		--clearSelectFocusColor: rgba(255, 255, 255, 0);
		--inputFontSize: 10px;
		--listRight: auto;
		--selectedItemPadding: 0px;
		--internalPadding: 0px;
	}
</style>
