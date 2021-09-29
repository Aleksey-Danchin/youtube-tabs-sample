document
	.querySelectorAll(".tab_label")
	.forEach((label) => label.addEventListener("click", labelClickHandler));

function labelClickHandler() {
	if (this.classList.contains("tab_label--active")) {
		return;
	}

	const segment = this.closest(".tab_segment");

	if (!segment) {
		return;
	}

	const navigation = segment.querySelector(".tab_navigation");
	const labels = navigation.querySelectorAll(".tab_label");
	labels.forEach((label) => label.classList.remove("tab_label--active"));
	this.classList.add("tab_label--active");

	const container = segment.querySelector(".tab_container");

	const items = Array.prototype.filter.call(container.children, (x) =>
		x.classList.contains("tab_item")
	);

	items.forEach((item) => item.classList.remove("tab_item--active"));

	const item = items.find((item) => item.dataset.tab === this.dataset.tab);

	if (item) {
		item.classList.add("tab_item--active");
	}
}
