<script>
	import { onMount } from "svelte";

	export let commands = [];
	// i know what im doing is EXTREMELY fucky but i had other work to do ok
	let customDocument = {
		querySelector: (div) => {
			return {
				div,
				innerHTML: "",
				appendChild: () => {},
			};
		},
	};

	onMount(() => {
		// @ts-ignore
		customDocument = document;
	});

	$: commands,
		(() => {
			setTimeout(() => {
				const element = customDocument.querySelector(".mainDiv");
				element.scrollTop = element.scrollHeight;
			}, 10);
		})();
</script>

<div class="mainDiv mb-auto flex flex-col children:mt-6 max-h-90vh overflow-scroll">
	{#each commands as command}
		<div class="flex">
			<img src="/botIcon.png" class="rounded-full w-[40px] h-[40px]" alt="" />
			<div class="ml-5 font-ptsans">
				<div class="flex">
					<h1 class="text-[#ED502F]">
						{command.name === "Matchmaker Bot" ? "" : "/"}{command.name}
					</h1>
					<h1 class="ml-3 text-deep-500">5000 Years Ago</h1>
				</div>
				<h1 class="text-white">{command.description}</h1>
			</div>
		</div>
	{/each}
</div>

<style>
	::-webkit-scrollbar {
		width: 0; /* Remove scrollbar space */
		background: transparent; /* Optional: just make scrollbar invisible */
	}
	div {
		scrollbar-width: none; /* Firefox */
		-ms-overflow-style: none; /* IE 10+ */
		overflow: -moz-scrollbars-none; /* None */
	}
</style>
