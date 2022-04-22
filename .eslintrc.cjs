module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
	plugins: ["svelte3", "@typescript-eslint"],
	ignorePatterns: ["*.cjs"],
	overrides: [{ files: ["*.svelte"], processor: "svelte3/svelte3" }],
	settings: {
		"svelte3/typescript": () => require("typescript"),
	},
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2020,
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
	rules: {
		"css-unused-selector": "off", // complains that body isnt being used in layout, but it is.
		"@typescript-eslint/ban-ts-comment": "off", // Svelte has a weird way of using enviroment variables, so this is disabled.
		"no-undef": "off", // Svelte has a weird way of using enviroment variables, so this is disabled.
		"@typescript-eslint/no-empty-function": "off", // I fully blame this on myself, as i'm doing an extremely weird thing, because i can't figure out how to have a reactive component that depends on document
	},
};
