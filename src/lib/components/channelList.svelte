<script>
	import { afterUpdate } from "svelte";
	import Leaderboard from "./leaderboard.svelte";

	export let guildName;

	export let channels = [];

	let users = [];

	const changeChannels = async (channel) => {
		const usersReq = await fetch(
			`https://localhost:8080/api/v1/leaderboards/${
				channel.queueMode === "solos" ? "solos" : "teams"
			}/channel/${channel.channelId}?skip=0`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		users = await usersReq.json();
	};
</script>

<div class="bg-deep-700 min-w-250px">
	<h1 class="text-white mt-7 ml-5 font-sans-bold text-l">{guildName}</h1>
	<div class="h-3px mt-7 bg-deep-500" />
	<div class="flex flex-col mt-7 ml-5 text-left">
		<h1 class="font-sans-bold text-l ml-3 text-white pb-3">Channels</h1>
		{#each channels as channel}
			<button
				class="text-deep-50 font-sans-bold text-left rounded-xl leading-10 pl-3 mr-5 hover:bg-deep hover:text-white"
				on:click={() => changeChannels(channel)}># {channel.name}</button
			>
		{/each}
	</div>
</div>
<div class="ml-auto mr-auto mt-20">
	<Leaderboard {users} />
</div>
