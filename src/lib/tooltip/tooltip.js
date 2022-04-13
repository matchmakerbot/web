import Tooltip from "./TooltipFromAction.svelte";

export const tooltip = (element) => {
	let title;
	let tooltipComponent;
	const mouseOver = (/** @type {{ path: { getBoundingClientRect: () => any; }[]; }} */ event) => {
		title = element.getAttribute("title");
		element.removeAttribute("title");
		const path = event.path[0].getBoundingClientRect();
		tooltipComponent = new Tooltip({
			props: {
				title: title,
				x: path.x,
				y: path.y,
			},
			target: document.body,
		});
	};
	const mouseLeave = () => {
		tooltipComponent.$destroy();
		element.setAttribute("title", title);
	};

	element.addEventListener("mouseover", mouseOver);
	element.addEventListener("mouseout", mouseLeave);

	return {
		destroy() {
			element.removeEventListener("mouseout", mouseOver);
			element.removeEventListener("mouseleave", mouseLeave);
		},
	};
};
