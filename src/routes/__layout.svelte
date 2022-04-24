<script>
	import "virtual:windi.css";
	import en from "../../locales/en.json";
	import it from "../../locales/it.json";
	import pl from "../../locales/pl.json";
	import es from "../../locales/es.json";
	import pt from "../../locales/pt.json";
	import fr from "../../locales/fr.json";
	import de from "../../locales/de.json";
	import ru from "../../locales/ru.json";

	import { addMessages, init, getLocaleFromNavigator } from "svelte-i18n";

	addMessages("pt", pt);
	addMessages("en", en);
	addMessages("fr", fr);
	addMessages("es", es);
	addMessages("de", de);
	addMessages("pl", pl);
	addMessages("it", it);
	addMessages("ru", ru);

	init({
		fallbackLocale: "en",
		initialLocale: getLocaleFromNavigator(),
	});
</script>

<slot />

<style global>
	@import url("https://fonts.googleapis.com/css2?family=Carter+One&family=Lato:wght@400;700&display=swap");
	@import url("https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&display=swap");
	body {
		@apply bg-deep-800;
		scrollbar-width: 0;
		overflow-x: hidden;
		touch-action: pan-y;
	}
</style>
