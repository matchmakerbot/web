<script>
	import { _ } from "svelte-i18n";
	import { isHidden } from "src/stores/leaderboard";
	import { paginate, DarkPaginationNav } from "svelte-paginate";
	import { fetchLeaderboard } from "./channelList.svelte";

	let currentPage = 1;
	let pageSize = 10;

	export let users = { data: [], total: 0 };
	export let channelData = {};

	const onPageChange = async (data) => {
		currentPage = data.detail.page;
		if (users.data.slice((currentPage - 1) * 10, currentPage * 10).length === 0) {
			const response = await fetchLeaderboard(channelData, (currentPage - 1) * pageSize);
			users.data = [...users.data, ...response.data];
		}
	};

	$: paginate({ items: users.data, pageSize, currentPage });

	const keys = [
		"#",
		$_("leaderboard.username"),
		$_("leaderboard.wins"),
		$_("leaderboard.losses"),
		$_("leaderboard.winrate"),
		$_("leaderboard.mmr"),
	];
</script>

<div class="mb-5 ml-auto mr-auto mt-6">
	<h1 class="text-5xl mb-3 text-white font-bold italic">{$_("leaderboard.leaderboard")}</h1>
	<div class="flex flex-col w-60vh lg:w-100vh">
		<div class=" bg-deep-500" />
		<div class="flex justify-between text-sm lg:text-xl bg-orange-500 rounded-xl p-5 mb-3">
			{#each keys as key, i}
				<h1 class="text-deep-900 {i !== 0 ? 'flex-1' : ''} {i === 1 ? 'ml-5' : ''} font-sans-bold">
					{i === 0 ? "" : "|"}&nbsp{key}
				</h1>
			{/each}
		</div>
		<div>
			{#if users.data.length !== 0}
				{#each users.data.slice((currentPage - 1) * 10, currentPage * 10) as user, i}
					<div
						class="flex flex-row justify-between text-sm lg:text-l text-white  bg-deep{i % 2 === 0
							? ''
							: '-700'} rounded-xl p-5 mt-2"
					>
						<h1 class="w-5">#{i + (currentPage - 1) * 10 + 1}</h1>
						<div class="ml-5 flex flex-row flex-1">
							<h1>| &nbsp</h1>
							<h1>{user.username.length > 19 ? `${user.name.substr(0, 16)}...` : user.username}</h1>
						</div>
						<h1 class="flex-1">| &nbsp {user.wins}</h1>
						<h1 class="flex-1">| &nbsp {user.losses}</h1>
						<h1 class="flex-1">
							| &nbsp {user.losses === 0
								? 0
								: Math.floor((user.wins / (user.wins + user.losses)) * 100)}%
						</h1>
						<h1 class="flex-1">| &nbsp {user.mmr}</h1>
					</div>
				{/each}
				<div id="nav" class="mt-5">
					<DarkPaginationNav
						totalItems={users.total}
						{pageSize}
						{currentPage}
						limit={1}
						showStepOptions={true}
						on:setPage={(e) => onPageChange(e)}
					/>
				</div>
			{:else}
				<div class="flex flex-col justify-center items-center">
					<h1 class="text-white font-sans-bold lg:text-4xl">{$_("leaderboard.no_users_found")}</h1>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	#nav :global(.pagination-nav) {
		background-color: #394b8d;
		border-radius: 0.75rem;
	}
	#nav :global(.option.number) {
		color: black;
	}
</style>
