<script>
	import { onMount } from "svelte";
	import ServerList from "$lib/components/serverList.svelte";
	let serverList = [];

	onMount(async () => {
		await fetch(`https://localhost:8080/api/v1/auth/validatecookie`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			mode: "cors",
			credentials: "include",
		});
		const serverListRequest = await fetch(
			`https://localhost:8080/api/v1/guilds/getguildsuserandbotisin`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
				mode: "cors",
				credentials: "include",
			}
		);
		serverList = await serverListRequest.json();
	});
</script>

<div class="flex">
	<ServerList servers={serverList} />
</div>

<style>
</style>
