import { writable } from "svelte/store";

const isHiddenStore = () => {
	const { subscribe, update } = writable(true);

	return {
		subscribe,
		update: () => update((n) => !n),
	};
};

export const isHidden = isHiddenStore();
