<script>
	import { Router, Route, Link } from "svelte-navigator";
	import AAA from "./routes/index.svelte";
</script>

<Router>
	<header>
		<h1>History</h1>

		<nav>
			<Link to="/">Index</Link>
		</nav>
	</header>

	<main>
		<Route path="/">
			<AAA/>
		</Route>
	</main>
</Router>
