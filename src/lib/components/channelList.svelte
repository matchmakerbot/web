<script context="module">
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
</script>

<script>
	import Leaderboard from "./leaderboard.svelte";

	export let guildName;
	export let channels = [];
	let choosenChannel = {};
	let leaderboardObj = {};
	let choosenLeaderboard = { data: [], total: 0 };

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

	export const getNewLeaderboard = async (
		/** @type {{ queueMode: string; channelId: string; }} */ channel,
		/** @type {number} */ skip
	) => {
		if (!Object.keys(leaderboardObj).includes(channel.channelId)) {
			const response = await fetchLeaderboard(channel, skip);

			leaderboardObj = { ...leaderboardObj, [channel.channelId]: response };
		}
		choosenChannel = channel;
		choosenLeaderboard = leaderboardObj[channel.channelId];
	};
</script>

<div class="bg-deep-700 min-w-250px <lg:hidden">
	<h1 class="text-white mt-7 ml-5 font-sans-bold text-l">{guildName}</h1>
	<div class="h-3px mt-7 bg-deep-500" />
	<div class="flex flex-col mt-7 ml-5 text-left">
		<h1 class="font-sans-bold text-l ml-3 text-white pb-3">Channels</h1>
		{#each channels as channel}
			<button
				class="font-sans-bold text-left rounded-xl leading-10 pl-3 mr-5 {choosenChannel.channelId ===
				channel.channelId
					? 'bg-deep-400 text-white'
					: ' text-deep-50 hover:bg-deep hover:text-white'}"
				on:click={() => getNewLeaderboard(channel, 0)}># {channel.name}</button
			>
		{/each}
	</div>
</div>
<div class="ml-auto mr-auto mt-10">
	<Leaderboard users={choosenLeaderboard} channelData={choosenChannel} />
</div>
