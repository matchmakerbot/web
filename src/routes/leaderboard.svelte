<script>
	import { onMount } from "svelte";
	import ServerList from "$lib/components/serverList.svelte";

	let serverList = (async () => {
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
		return await serverListRequest.json();
	})();
</script>

<div class="flex">
	{#await serverList then actualServerList}
		<ServerList servers={actualServerList} />
	{/await}
</div>

<style>
</style>
