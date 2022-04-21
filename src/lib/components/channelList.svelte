<script>
	export let guildName;
	export let channels = [];
	export let onChannelClickCallback;
	export let choosenChannel = {};
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
				on:click={() => onChannelClickCallback(channel, 0)}># {channel.name}</button
			>
		{/each}
	</div>
</div>
