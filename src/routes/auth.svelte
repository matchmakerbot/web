<script>
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";
	onMount(async () => {
		await fetch(
			`https://localhost:8080/api/v1/auth/discord?code=${$page.url.searchParams.get("code")}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
				mode: "cors",
				credentials: "include",
			}
		);
		goto("/leaderboard");
	});
</script>

<h1 class="text-white">Authenticating...</h1>
