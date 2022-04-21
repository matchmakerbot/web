<script>
	import { goto } from "$app/navigation";
	import { Stretch } from "svelte-loading-spinners";
	import ServerList from "$lib/components/serverList.svelte";

	// @ts-ignore
	const discordOauth2Link = DISCORD_OAUTH2_LINK;

	const userDataAndServerList = (async () => {
		const cookieValidation = await fetch(`https://localhost:8080/api/v1/auth/validatecookie`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			mode: "cors",
			credentials: "include",
		});
		if (cookieValidation.status === 400) {
			goto(discordOauth2Link);
		}

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

		const userData = await fetch(`https://localhost:8080/api/v1/users/getuserdata`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			mode: "cors",
			credentials: "include",
		});

		return { serverList: await serverListRequest.json(), userData: await userData.json() };
	})();
</script>

<div class="flex">
	{#await userDataAndServerList}
		<div class="grid place-items-center h-screen w-screen">
			<Stretch size="300" color="white" />
		</div>
	{:then actualUserDataAndServerList}
		<ServerList
			servers={actualUserDataAndServerList.serverList}
			userData={actualUserDataAndServerList.userData}
			onServerClickCallback={() => {}}
		/>
	{/await}
</div>
