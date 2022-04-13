<script>
	import Leaderboard from "./leaderboard.svelte";

	export let guildName;
	export let channels = [];
	let choosenChannel;
	let leaderboardObj = {};
	let choosenLeaderboard = [];

	const fetchLeaderboard = async (channel) => {
		const response = await fetch(
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
		return await response.json();
	};

	$: channels,
		(async () => {
			if (channels.length !== 0) {
				const firstLeaderboard = channels[0];
				if (!Object.keys(leaderboardObj).includes(firstLeaderboard.channelId)) {
					const response = await fetchLeaderboard(firstLeaderboard);

					leaderboardObj = { ...leaderboardObj, [firstLeaderboard.channelId]: response };

					choosenChannel = firstLeaderboard.channelId;

					choosenLeaderboard = response;
					return;
				}
				choosenLeaderboard = leaderboardObj[firstLeaderboard.channelId];

				choosenChannel = firstLeaderboard.channelId;
			}
		})();

	const getNewLeaderboard = async (
		/** @type {{ queueMode: string; channelId: string; }} */ channel
	) => {
		if (!Object.keys(leaderboardObj).includes(channel.channelId)) {
			const response = await fetchLeaderboard(channel);

			leaderboardObj = { ...leaderboardObj, [channel.channelId]: response };
		}
		choosenChannel = channel.channelId;
		choosenLeaderboard = leaderboardObj[channel.channelId];
	};
</script>

<div class="bg-deep-700 min-w-250px">
	<h1 class="text-white mt-7 ml-5 font-sans-bold text-l">{guildName}</h1>
	<div class="h-3px mt-7 bg-deep-500" />
	<div class="flex flex-col mt-7 ml-5 text-left">
		<h1 class="font-sans-bold text-l ml-3 text-white pb-3">Channels</h1>
		{#each channels as channel}
			<button
				class="font-sans-bold text-left rounded-xl leading-10 pl-3 mr-5 {choosenChannel ===
				channel.channelId
					? 'bg-deep-400 text-white'
					: ' text-deep-50 hover:bg-deep hover:text-white'}"
				on:click={() => getNewLeaderboard(channel)}># {channel.name}</button
			>
		{/each}
	</div>
</div>
<div class="ml-auto mr-auto mt-20">
	<Leaderboard users={choosenLeaderboard} />
</div>
