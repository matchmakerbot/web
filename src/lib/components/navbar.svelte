<script>
	import DiscordButton from "./discordButton.svelte";
	import { goto } from "$app/navigation";

	const userData = (async () => {
		const request = await fetch(`https://localhost:8080/api/v1/users/getuserdata`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			mode: "cors",
			credentials: "include",
		});
		const data = await request.json();
		if (data.error) {
			throw "rip";
		}
		return data;
	})();
</script>

<div class="p-4 flex justify-between items-center">
	<h1 class="lg:text-2xl text-white heading">Matchmaker Bot™</h1>
	<div class="flex items-center">
		<h1 class="text-gray-300 mr-5">English</h1>

		{#await userData then fetchedUserData}
			<button on:click={() => goto("/leaderboard")}>
				<img
					class="rounded-full w-50px"
					src={`https://cdn.discordapp.com/avatars/${fetchedUserData.id}/${fetchedUserData.avatar}.png`}
					alt=""
					title={fetchedUserData.username}
				/>
			</button>
		{:catch}
			<DiscordButton />
		{/await}
	</div>
</div>
