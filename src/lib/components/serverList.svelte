<script>
	export let servers = [];
</script>

<div class="bg-deep-500 flex justify-between flex-col min-h-100vh">
	{#each servers as server}
		<img class="p-15px" src={server.img} alt="" />
	{/each}
	<div class="flex flex-col w-48px ml-4 mb-2 children:mt-2">
		<div class="h-2px mt-7 bg-deep-50" />
		<img class="p-1 bg-deep-800 rounded-3xl " src="../../../static/userData/lang.png" alt="" />
		<img class="" src="../../../static/userData/me.png" alt="" />
	</div>
</div>
