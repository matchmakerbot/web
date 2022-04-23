<script>
	import { goto } from "$app/navigation";
	import { _ } from "svelte-i18n";

	// @ts-ignore
	const discordOauth2Link = DISCORD_OAUTH2_LINK;
</script>

<button
	on:click={() => goto(discordOauth2Link)}
	class="bg-orange-600 text-white text-sm lg:text-xl p-2 rounded-lg flex items-center"
	><img src="/discordlogo.svg" class="mr-2" alt="discord button" />
	{$_("home.discord_button")}</button
>
