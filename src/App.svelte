<script>
	import Router from "svelte-spa-router";
	import Home from "./Home.svelte";
	import Header from "./Header.svelte";
	import NotFound from "./NotFound.svelte";
	const routes = {
		"/": Home,
		"*": NotFound,
	};
</script>

<Header />
<Router {routes} />
