<script>
	import Navbar from "$lib/components/navbar.svelte";
	import DiscordButton from "$lib/components/discordButton.svelte";
	import Icon from "@iconify/svelte";
</script>

<Navbar />
<div class="flex justify-evenly mt-20 flex-wrap">
	<div class="mt-15">
		<h1 class="text-6xl heading text-white w-[11ch]">Create your own ranking systems in Discord</h1>
		<p class="text-xl text-gray-300 w-[50ch] mt-5">
			Creating your own custom rankup system was never easier, just add our bot to your server and
			let the fun begin!
		</p>
		<div class="flex mt-5">
			<DiscordButton />
			<button class="bg-deep-500 text-white text-xl rounded-lg flex items-center p-3 ml-5">
				Invite bot to server <Icon
					icon="akar-icons:arrow-up-right"
					color="white"
					class="ml-2"
				/></button
			>
		</div>
	</div>
	<div class="flex">
		<img src="../../../static/greenEclipse.png" class="" alt="Eclipse" />
		<img src="../../../static/Phone.png" class="absolute ml-20" alt="Phone" />
		<img src="../../../static/Phone.png" class="absolute mt-8" alt="Phone 2" />
	</div>
</div>
