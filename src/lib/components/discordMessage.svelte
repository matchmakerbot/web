<script>
	import { _ } from "svelte-i18n";

	export let command = "";
	export let description = "";
	// i know what im doing is EXTREMELY fucky but i had other work to do ok
</script>

<div class="flex">
	<img src="/botIcon.png" class="rounded-full min-w-[40px] h-[40px]" alt="" />
	<div class="ml-5 font-ptsans">
		<div class="flex">
			<h1 class="text-[#ED502F]">
				{command.startsWith("matchmaker_bot") ? "" : "/"}{command.startsWith("matchmaker_bot")
					? "Matchmaker Bot"
					: command}
			</h1>
			<h1 class="ml-3 text-deep-400">{$_("commands.years_ago")}</h1>
		</div>
		<h1 class="text-white">{description}</h1>
	</div>
</div>
