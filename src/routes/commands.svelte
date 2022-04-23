<script>
	import { tooltip } from "$lib/tooltip/tooltip.js";
	import { dictionary } from "svelte-i18n";
	import { locale } from "svelte-i18n";
	import { _ } from "svelte-i18n";
	import DiscordMessage from "$lib/components/discordMessage.svelte";
	let channels = ["general help", "solos", "teams"];
	let choosenChannel = "general help";
	let currentText = "";
	let i = 0;
	let helpPages = $dictionary[$locale === "en-US" ? "en" : $locale].commands.commands_info;

	const addText = (keyEvent) => {
		if (keyEvent.key === "Enter" && keyEvent.target.value.length > 0) {
			helpPages[choosenChannel][`matchmaker_bot_${i++}`] = currentText;
			helpPages = helpPages;
			currentText = "";
		}
	};

	const onChannelClick = (channel) => {
		choosenChannel = channel;
	};
</script>

<div class="flex">
	<div
		class="bg-deep-500 flex justify-between items-center flex-col min-h-100vh children:m-3 children:w-50px <lg:hidden"
	>
		<div>
			<button title={$_("commands.funny_text_hover_server")} use:tooltip>
				<img
					class="rounded-3xl"
					src="https://cdn.discordapp.com/avatars/215982178046181376/7207696baf6774c970bcd37c6a12c5fd.png"
					alt=""
				/>
			</button>
		</div>
		<div class="flex flex-col">
			<div class="h-[2px] bg-deep-50 mb-2" />
			<img class="p-1 bg-deep-800 rounded-3xl mb-2" src="/userData/lang.png" alt="" />
			<img
				class="rounded-full"
				src={`https://cdn.discordapp.com/avatars/215982178046181376/7207696baf6774c970bcd37c6a12c5fd.png`}
				alt=""
				title="You"
				use:tooltip
			/>
		</div>
	</div>
	<div class="bg-deep-700 min-w-250px <lg:hidden">
		<h1 class="text-white mt-7 ml-5 font-sans-bold text-l">{$_("commands.commands")}</h1>
		<div class="h-3px mt-7 bg-deep-500" />
		<div class="flex flex-col mt-7 ml-5 text-left">
			<h1 class="font-sans-bold text-l ml-3 text-white pb-3">{$_("commands.help_pages")}</h1>
			{#each channels as channel}
				<button
					class="font-sans-bold text-left rounded-xl leading-10 pl-3 mr-5 mt-1 {choosenChannel ===
					channel
						? 'bg-deep-400 text-white'
						: ' text-deep-50 hover:bg-deep hover:text-white'}"
					on:click={() => onChannelClick(channel)}># {channel}</button
				>
			{/each}
		</div>
	</div>
	<img src="/bars.png" class="absolute w-0px <lg:w-50px mt-3 ml-5" alt="" />
	<div class="h-100vh" />
	<div class="relative ml-5 mr-5  w-[100%]">
		<div class="absolute bottom-0 w-[100%]">
			<DiscordMessage commands={helpPages[choosenChannel]} />
			<input
				type="text"
				bind:value={currentText}
				on:keydown={(key) => addText(key)}
				class="discordText bg-deep-400 px-5 py-4 rounded-xl mt-2 mb-5 text-white focus:outline-0 w-[100%]"
				placeholder={$_("commands.funny_text_typing_zone")}
			/>
		</div>
	</div>
</div>
