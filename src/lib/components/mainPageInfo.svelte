<script>
	import { goto } from "$app/navigation";
	import { _ } from "svelte-i18n";
	import Icon from "@iconify/svelte";
	export let title = "";
	export let description = "";
	export let redirectingLink = "";
</script>

<div
	class="flex <lg:flex-col justify-center lg:justify-evenly lg:mt-20 flex-wrap lg:ml-10 items-center"
>
	<div class="<lg:ml-2 mt-12">
		<h1 class="text-5xl lg:text-6xl heading text-white w-[9ch] lg:w-[11ch]">
			{title}
		</h1>
		<p class="lg:text-xl text-gray-300 w-[40ch] lg:w-[50ch] mt-5">
			{description}
		</p>
		<button
			on:click={() => goto(redirectingLink)}
			class="bg-deep-500 text-white text-xl rounded-lg items-center p-3 mt-5"
		>
			{$_("home.commands_button")} <Icon icon="akar-icons:arrow-up-right" color="white" /></button
		>
	</div>
</div>
