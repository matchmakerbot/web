<script>
	export let users = [];
	const keys = ["#", "Username", "Wins", "Losses", "Winrate", "MMR"];
</script>

<div class="flex flex-col w-100vh">
	<div class="h- bg-deep-500" />
	<div class="flex justify-between text-xl bg-orange-500 rounded-xl p-5 mb-3">
		{#each keys as key, i}
			<h1 class="text-deep-900 {i !== 0 ? 'flex-1' : ''} {i === 1 ? 'ml-5' : ''} font-sans-bold">
				{i === 0 ? "" : "|"}&nbsp{key}
			</h1>
		{/each}
	</div>
	<div class="flex flex-col justify-between">
		{#each users as user, i}
			<div
				class="flex flex-row justify-between text-l text-white  bg-deep{i % 2 === 0
					? ''
					: '-700'} rounded-xl p-5 mt-2"
			>
				<h1 class="">#{i + 1}</h1>
				<div class="ml-5 flex flex-row flex-1">
					<h1>| &nbsp</h1>
					<h1>{user.username.length > 19 ? user.name.substr(0, 18) : user.username}</h1>
				</div>
				<h1 class="flex-1">| &nbsp {user.wins}</h1>
				<h1 class="flex-1">| &nbsp {user.losses}</h1>
				<h1 class="flex-1">
					| &nbsp {user.losses === 0 ? 100 : Math.floor((user.wins / (user.wins + user.losses)) * 100)}%
				</h1>
				<h1 class="flex-1">| &nbsp {user.mmr}</h1>
			</div>
		{/each}
	</div>
</div>
