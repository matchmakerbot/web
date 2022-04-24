// import fs from "fs";
// import { addMessages, init, getLocaleFromNavigator, register } from "svelte-i18n";

// const en = JSON.parse(fs.readFileSync("./locales/en.json", "utf8"));
// const pt = JSON.parse(fs.readFileSync("./locales/pt.json", "utf8"));
// const fr = JSON.parse(fs.readFileSync("./locales/fr.json", "utf8"));
// const es = JSON.parse(fs.readFileSync("./locales/es.json", "utf8"));
// const pl = JSON.parse(fs.readFileSync("./locales/pl.json", "utf8"));
// const it = JSON.parse(fs.readFileSync("./locales/it.json", "utf8"));
// const de = JSON.parse(fs.readFileSync("./locales/de.json", "utf8"));

// register("pt", pt);
// register("en", en);
// register("fr", fr);
// register("es", es);
// register("de", de);
// register("pl", pl);
// register("it", it);

// init({
// 	fallbackLocale: "en",
// 	initialLocale: "en",
// });
export const fullLang = [
	{ value: "en", label: "English" },
	{ value: "pt", label: "Português" },
	{ value: "fr", label: "Français" },
	{ value: "es", label: "Español" },
	{ value: "de", label: "Deutsch" },
	{ value: "pl", label: "Polski" },
	{ value: "it", label: "Italiano" },
	{ value: "ru", label: "Русский" },
];
