<script>
	import { locale } from "svelte-i18n";
	import { fullLang } from "/src/i18n.js";
	import Select from "svelte-select";
	import { goto } from "$app/navigation";
	const userData = (async () => {
		const request = await fetch(`https://${HOST_NAME}/api/v1/users/getuserdata`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			mode: "cors",
			credentials: "include",
		});

		if (/^(4|5)/.test(request.status)) {
			throw new Error("Error fetching user data");
		}

		const data = await request.json();

		return data;
	})();
</script>

<div class="p-4 flex justify-between items-center relative z-10">
	<h1 class="lg:text-2xl text-white heading">Matchmaker Bot™</h1>
	<div class="flex items-center">
		<div class="language mr-5 w-30">
			<Select
				on:select={(event) => ($locale = event.detail.value)}
				placeholder={$locale === "en-US"
					? "English"
					: fullLang.find((e) => e.value === $locale).label}
				items={fullLang}
				isSearchable={false}
			/>
		</div>
		{#await userData then fetchedUserData}
			<button on:click={() => goto("/leaderboard")}>
				<img
					class="rounded-full w-50px"
					src={`https://cdn.discordapp.com/avatars/${fetchedUserData.id}/${fetchedUserData.avatar}.png`}
					alt=""
					title={fetchedUserData.username}
				/>
			</button>
		{:catch}
			<div />
		{/await}
	</div>
</div>

<style>
	.language {
		background-color: transparent;
		--border: 2px solid #394b8d;
		--borderRadius: 10px;
		--listMaxHeight: 100vh;
		color: white;
		--background: rgba(255, 255, 255, 0);
		--listBackground: #394b8d;
		--listMaxHeight: 100vh;
		--itemHoverColor: black;
		--listBorder: 2px solid #394b8d;
		--itemIsActiveBG: #394b8d;
		--itemHoverBG: #b9c2e3;
		--itemColor: white;
		--clearSelectColor: rgba(255, 255, 255, 0);
		--clearSelectFocusColor: rgba(255, 255, 255, 0);
		--borderFocusColor: #151d35;
	}
</style>
