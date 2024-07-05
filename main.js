window.addEventListener("scroll", function () {
	const header = document.querySelector(".header");
	if (window.scrollY > 0) {
		header.style.background = "rgba(0, 0, 0, 0.5)";
		if (window.innerWidth < 640) {
			header.style.top = "1rem";
			header.style.left = "1rem";
			header.style.right = "1rem";
		}
	} else {
		header.style.background = "transparent";
		header.style.top = "0";
		header.style.left = "0";
		header.style.right = "0";
	}
});
