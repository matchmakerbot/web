<script>
	import { tooltip } from "$lib/tooltip/tooltip.js";
	import { dictionary } from "svelte-i18n";
	import { fullLang } from "/src/i18n.svelte";
	import { locale } from "svelte-i18n";
	import { _ } from "svelte-i18n";
	import Select from "svelte-select";

	import DiscordMessage from "$lib/components/discordMessage.svelte";
	let channels = ["general help", "solos", "teams"];
	let choosenChannel = "general help";
	let currentText = "";
	let i = 0;
	let isHidden = true;
	let helpPages = $dictionary[$locale === "en-US" ? "en" : $locale].commands.commands_info;
	$: locale, (helpPages = $dictionary[$locale === "en-US" ? "en" : $locale].commands.commands_info);

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
		class="bg-deep-500 flex justify-between items-center flex-col min-h-100vh children:m-3 children:w-50px <lg:{isHidden &&
			'hidden'}"
	>
		<div>
			<button title={$_("commands.funny_text_hover_server")} use:tooltip>
				<img class="rounded-3xl" src="/cat.png" alt="" />
			</button>
		</div>
		<div class="flex flex-col children:mb-2">
			<div class="h-[2px] bg-deep-50" />
			<div class="language">
				<Select
					on:select={(event) => ($locale = event.detail.value)}
					placeholder=""
					items={fullLang}
					isSearchable={false}
				/>
			</div>
			<img class="rounded-full" src="/cat.png" title="You, whoever that is" alt="" use:tooltip />
		</div>
	</div>
	<div class="bg-deep-700 min-w-250px <lg:{isHidden && 'hidden'}">
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
	<div class="relative w-[100%] h-100vh">
		<div class="relative z-1 bg-deep-900 <lg:mb-5 <lg:h-65px">
			<img
				src="/bars.png"
				on:click={() => (isHidden = !isHidden)}
				class="absolute w-0px <lg:w-40px mt-3 ml-3"
				alt=""
			/>
		</div>
		<div
			class="absolute bottom-0 w-[100%] {choosenChannel !== 'general help'
				? '<lg:h-[95%]'
				: ''} pt-5 ml-5 flex flex-col z-0"
		>
			<div class="mainDiv mb-auto flex flex-col children:mt-6 max-h-90vh overflow-scroll mr-10">
				{#each Object.entries(helpPages[choosenChannel]) as [command, description]}
					<DiscordMessage {command} {description} />
				{/each}
			</div>
			<input
				type="text"
				bind:value={currentText}
				on:keydown={(key) => addText(key)}
				class="discordText bg-deep-400 px-5 py-4 rounded-xl mt-2 mb-5 text-white focus:outline-0 mr-10"
				placeholder={$_("commands.funny_text_typing_zone")}
			/>
		</div>
	</div>
</div>

<style>
	::-webkit-scrollbar {
		width: 0; /* Remove scrollbar space */
		background: transparent; /* Optional: just make scrollbar invisible */
		overflow-x: hidden;
	}
	div {
		scrollbar-width: none; /* Firefox */
		-ms-overflow-style: none; /* IE 10+ */
		overflow: -moz-scrollbars-none; /* None */
	}

	.language {
		background-image: url("/servers/lang.png");
		background-position: center;
		background-repeat: no-repeat;
		--border: 2px solid #394b8d;
		--borderRadius: 100%;
		--height: 50px;
		--inputColor: rgba(255, 255, 255, 0);
		color: rgba(255, 255, 255, 0);
		--background: rgba(255, 255, 255, 0);
		--listBackground: #394b8d;
		--listMaxHeight: 100vh;
		--listBorder: 2px solid #394b8d;
		--itemIsActiveBG: #394b8d;
		--itemHoverBG: #b9c2e3;
		--itemColor: white;
		--itemHoverColor: black;
		--clearSelectColor: rgba(255, 255, 255, 0);
		--borderFocusColor: #151d35;
		--indicatorColor: rgba(255, 255, 255, 0);
		--clearSelectFocusColor: rgba(255, 255, 255, 0);
		--inputFontSize: 10px;
		--listRight: auto;
		--selectedItemPadding: 0px;
		--internalPadding: 0px;
	}
</style>
