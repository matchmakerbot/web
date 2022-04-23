<script>
	import { page } from "$app/stores";
	import { _ } from "svelte-i18n";
	const code = $page.url.searchParams.get("code");
	const data = $page.url.searchParams.get("data");
</script>

<div class="grid place-items-center h-screen w-screen">
	<div
		class="flex flex-col lg:flex-row items-center border-deep-400 lg:border-2 rounded-2xl lg:p-10 lg:w-5xl"
	>
		<img
			src="/400/mood.png"
			width={300}
			height={300}
			class="rounded-full"
			alt="cat with head in shoe, captioned mood"
		/>
		<div class="lg:ml-0 lg:ml-50 text-white text-left text-center <lg:mt-5">
			<h1 class="text-5xl lg:text-10xl font-bold">{code ? code : 404}</h1>
			<h2 class="lg:text-xl">{data ? data : "Page not found"}</h2>
		</div>
	</div>
</div>
