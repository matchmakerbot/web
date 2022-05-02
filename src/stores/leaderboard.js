import { writable } from "svelte/store";

const isHiddenStore = () => {
	const { subscribe, update } = writable(true);

	return {
		subscribe,
		update: () => update((n) => !n),
	};
};

const serversStore = () => {
	const { subscribe, update } = writable([]);

	return {
		subscribe,
		addNewServer: (server) => update((servers) => [...servers, server]),
	};
};

const channelsStore = () => {
	const { subscribe, update } = writable([]);

	return {
		subscribe,
		addNewchannel: (channel) => update((channels) => [...channels, channel]),
	};
};

export const isHidden = isHiddenStore();
export const channels = channelsStore();
export const servers = serversStore();
