<script>
	import ServerList from "$lib/components/serverList.svelte";
	import ChannelList from "$lib/components/channelList.svelte";
	import Leaderboard from "$lib/components/leaderboard.svelte";
</script>

<style>

</style>

<div class="flex">
	<ServerList servers={[{ img: "../../../static/servers/1.png" }]} />
	<ChannelList guildName="Tweeno's server" channels={["this shite", "is aids"]} />
	<div class="ml-auto mr-auto mt-20">
		<Leaderboard 
			users={[
				{
					name: "Tweeno",
					img: "https://cdn.discordapp.com/avatars/215982178046181376/c986bd7f97c123464accc3bde4caf93c.png",
					wins: 2,
					losses: 1,
					mmr: "1500",
				},
				{
					name: "Tweeno",
					img: "https://cdn.discordapp.com/avatars/215982178046181376/c986bd7f97c123464accc3bde4caf93c.png",
					wins: 2,
					losses: 1,
					mmr: "1500",
				},
				{
					name: "Tweeno",
					img: "https://cdn.discordapp.com/avatars/215982178046181376/c986bd7f97c123464accc3bde4caf93c.png",
					wins: 2,
					losses: 1,
					mmr: "1500",
				},
			]}
		/>
	</div>
</div>
