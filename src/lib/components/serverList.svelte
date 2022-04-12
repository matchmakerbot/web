<script>
	import ChannelList from "./channelList.svelte";

	export let servers = [];

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

			channelsObj = { [servers[0].id]: channelsReq };

			choosenChannels = channelsReq;
		})();

	const getNewChannels = async (/** @type {string} */ id) => {
		if (!Object.keys(channelsObj).includes(id)) {
			const channelsReq = await fetchChannels(id);

			channelsObj = { ...channelsObj, [id]: channelsReq };
		}

		choosenChannels = channelsObj[id];
	};
</script>

<div
	class="bg-deep-500 flex justify-between items-center flex-col min-h-100vh children:m-3 children:w-50px"
>
	<div>
		{#each servers as server}
			<button on:click={() => getNewChannels(server.id)}>
				<img
					class="mt-1 rounded-3xl"
					src={server.icon == null
						? "../../../static/servers/defaultserverlogo.png"
						: `https://cdn.discordapp.com/icons/${server.id}/${server.icon}.png`}
					alt=""
				/>
			</button>
		{/each}
	</div>
	<div class="flex flex-col mb-1 children:mt-3">
		<div class="h-[2px] mt-7 bg-deep-50" />
		<img class="p-1 bg-deep-800 rounded-3xl " src="../../../static/userData/lang.png" alt="" />
		<img class="" src="../../../static/userData/me.png" alt="" />
	</div>
</div>
<ChannelList guildName="Tweeno's server" channels={choosenChannels} />
