<script>
	import { tooltip } from "$lib/tooltip/tooltip.js";
	import DiscordMessage from "$lib/components/discordMessage.svelte";
	let channels = ["generalHelp", "solos", "teams"];
	let choosenChannel = "generalHelp";
	let currentText = "";
	let helpPages = {
		solos: [
			{
				name: "cancel",
				description:
					"Cancel the game. Administrators can also do /cancel force gameId to force a game cancellation",
			},
			{
				name: "changegame",
				description:
					"Cancels/reverts score of a finished game. Usage: /changegame (gameid) cancel, this example will cancel the game, as it never happen. /changegame (gameid) revert, this example will revert the scores",
			},
			{
				name: "leaderboard",
				description:
					"Checks your current score. Usage: /leaderboard channel <page> (default is 1) to check score in the channel youre in, /leaderboard channel <page> <channelid> to check the score of another channel, or /leaderboard me to check your current score",
			},
			{ name: "leave", description: "Leave the queue" },
			{
				name: "ongoinggames",
				description: "Check the current games! Usage: /ongoinggames <page> (default is 1)",
			},
			{
				name: "q",
				description:
					"Enter the queue (removes player after 45 minutes if no game has been made) (no need to set user if mode is solos) (Captains disabled for queues with less than 6 players)",
			},
			{
				name: "report",
				description:
					"Ends the game, giving the wining team one win and vice versa to the losing team. Usage: /report win OR /report lose",
			},
			{
				name: "reset",
				description:
					"Resets the score of an individual player (/reset player <discordid>) or the whole channel where this command is inserted (/reset channel)",
			},
			{ name: "status", description: "Check the queue status" },
		],
		teams: [
			{
				name: "cancel",
				description:
					"Cancel the game. Administrators can also do /cancel force gameId to force a game cancellation",
			},
			{
				name: "changegame",
				description:
					"Cancels/reverts score of a finished game. Usage: /changegame (gameid) cancel, this example will cancel the game, as it never happen. /changegame (gameid) revert, this example will revert the scores",
			},
			{ name: "createteam", description: "Creates a team, usage: /createteam Maniacs" },
			{
				name: "disband",
				description: "Deletes your team, admins can also delete a team by typing /disband teamname",
			},
			{
				name: "giveownership",
				description: "Gives team ownership to a specific user. Usage: /giveownership @dany",
			},
			{ name: "invite", description: "Invites an user, usage: /invite @dany" },
			{ name: "jointeam", description: "Join a team that invited you, usage: /jointeam Maniacs" },
			{
				name: "kickplayer",
				description:
					"Kicks a player from your team, usage: /kickplayer @dany or /kickplayer discordid",
			},
			{
				name: "leaderboard",
				description:
					"Checks your current score. Usage: /leaderboard channel <page> (default is 1) to check score in the channel youre in, /leaderboard channel <page> <channelid> to check the score of another channel, or /leaderboard me to check your current score",
			},
			{ name: "leave", description: "Leave the queue" },
			{ name: "leaveteam", description: "Leave your team" },
			{
				name: "listteams",
				description:
					"Lists all the team in a guild. Usage: /listteam 1 for the first page, and so on",
			},
			{ name: "ongoinggames", description: "Check the current games!" },
			{ name: "pendinginvites", description: "Check who invited you!" },
			{
				name: "q",
				description:
					"Enter the queue. To do this do /q and tag your other teammates(depending on the qeueSize) example: /q @Dany @Johny @Tony @David (removes team after 45 minutes if no game has been made)",
			},
			{
				name: "report",
				description:
					"Ends the game, giving the wining team one win and vice versa to the losing team. Usage: /report win OR /report lose",
			},
			{
				name: "reset",
				description:
					"Resets the score of an individual team (/reset team teamName) or the whole channel where this command is inserted (/reset channel)",
			},
			{ name: "status", description: "Check the queue status" },
			{
				name: "whois",
				description: "Check for team members, usage: /whois Maniacs, or /whois to check your team",
			},
		],
		generalHelp: [
			{
				name: "config",
				description: "Configure the matchmaker channel, usage: /config createVoiceChannels on",
			},
			{ name: "credits", description: "Shows who made the bot (he's hot af) and some useful data" },
			{
				name: "examplesolos",
				description: "Gives you an example of how to use the solos version for the bot.",
			},
			{ name: "helpsolosmatchmaking", description: "Commands for solos matchmaking" },
			{ name: "helpteamsmatchmaking", description: "Commands for teams matchmaking" },
			{
				name: "queuetype",
				description: "Set the queue type for a channel, usage: /queuetype <queueSize> <queueMode>",
			},
		],
	};

	const addText = (key) => {
		if (key.code === "Enter") {
			helpPages[choosenChannel].push({ name: "Matchmaker Bot", description: currentText });
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
			<button title="Bruh this isn't discord" use:tooltip>
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
		<h1 class="text-white mt-7 ml-5 font-sans-bold text-l">Commands</h1>
		<div class="h-3px mt-7 bg-deep-500" />
		<div class="flex flex-col mt-7 ml-5 text-left">
			<h1 class="font-sans-bold text-l ml-3 text-white pb-3">Help Pages</h1>
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
				placeholder="Add a new command (100% works)"
			/>
		</div>
	</div>
</div>
