<script>
	export let guildName;
	export let channels = [];
</script>

<div class="bg-deep-700 min-w-250px">
	<h1 class="text-white mt-7 ml-5 font-sans-bold text-l">{guildName}</h1>
	<div class="h-3px mt-7 bg-deep-500" />
	<div class="flex flex-col mt-7 ml-5 text-left">
		<h1 class="font-sans-bold text-l ml-3 text-white pb-3">Channels</h1>
		{#each channels as channel}
			<button
				class="text-deep-50 font-sans-bold text-left rounded-xl leading-10 pl-3 mr-5 hover:bg-deep hover:text-white"
				># {channel}</button
			>
		{/each}
	</div>
</div>
