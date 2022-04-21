<script>
	import ChannelList from "./channelList.svelte";
	import { tooltip } from "../tooltip/tooltip.js";

	export let servers = [];
	export let userData;
	export let onServerClickCallback;
</script>

<div
	class="bg-deep-500 flex justify-between items-center flex-col min-h-100vh children:m-3 children:w-50px <lg:hidden"
>
	<div>
		{#each servers as server}
			<button title={server.name} on:click={() => onServerClickCallback(server.id)} use:tooltip>
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
