import adapter from "@sveltejs/adapter-node";
import preprocess from "svelte-preprocess";
import WindiCSS from "vite-plugin-windicss";
import replace from "@rollup/plugin-replace";
import dotenv from "dotenv";

dotenv.config();

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [preprocess()],

	kit: {
		adapter: adapter({ out: "./dist" }),
		vite: {
			plugins: [
				WindiCSS(),
				replace({
					DISCORD_OAUTH2_LINK: JSON.stringify(process.env.DISCORD_OAUTH2_LINK),
					HOST: JSON.stringify(process.env.HOST),
				}),
			],
			server: {
				fs: {
					allow: [".."],
				},
				https: !process.env.DEV && {
					cert: "./certs/cert.pem",
					key: "./certs/key.pem",
				},
			},
		},
	},
};

export default config;
