<script>
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";
	import { _ } from "svelte-i18n";

	onMount(async () => {
		const response = await fetch(
			`https://${HOST_NAME}/api/v1/auth/discord?code=${$page.url.searchParams.get("code")}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
				mode: "cors",
				credentials: "include",
			}
		);
		if (/^(4|5)/.test(response.status)) {
			return goto(`/error?code=${response.status}&data=${response.statusText}`);
		}
		goto("/leaderboard");
	});
</script>

<h1 class="text-white">{$_("authenticating")}...</h1>
