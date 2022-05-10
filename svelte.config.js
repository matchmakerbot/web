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
					DISCORD_OAUTH2_LINK: `"https://discord.com/api/oauth2/authorize?client_id=571839826744180736&redirect_uri=https%3A%2F%2Fmatchmakerbot.net%2Fauth&response_type=code&scope=identify%20guilds%20guilds.members.read"`,
					HOST_NAME: `"matchmakerbot.net"`,
				}),
			],
			server: {
				fs: {
					allow: [".."],
				},
			},
		},
	},
};

export default config;
