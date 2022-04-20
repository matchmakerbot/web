<script>
	import ServerList from "$lib/components/serverList.svelte";
</script>

<div class="flex">
	<ServerList
		userData={{
			userId: "215982178046181376",
			avatar: "422816af7234563212e11c74c858b7ba",
			username: "Who's dis",
		}}
		servers={[{ name: "test", id: "12345678901234567890123456789012", icon: "lul" }]}
	/>
</div>
