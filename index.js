"use strict";
function showContent(item) {
	// Get all paragraphs
	const content = document.querySelectorAll(".why-contents");
	console.log(content);
	// Hide all paragraphs
	content.forEach((paragraph) => {
		paragraph.classList.remove("show");
	});

	// Show the clicked paragraph
	const selectedHeader = document.querySelector(`.why-contents.${item}`);
	selectedHeader.classList.add("show");
}

const header = document.querySelector(".nav-section");
const elements = document.querySelector(".nav-list");
const menu = document.querySelectorAll(".nav-link");
const icon = document.querySelector("#menu-icon i");

menu.forEach((element) => {
	element.addEventListener("click", () => {
		elements.classList.toggle("active");
		icon.classList.toggle("active");
	});
});

// Animation on scroll
ScrollReveal({ distance: "60px", duration: 2000, delay: 400 });
ScrollReveal().reveal(".about-container, .why-container", {
	delay: 110,
	origin: "bottom",
	interval: 500,
	duration: 2200,
});
ScrollReveal().reveal(".priority", {
	delay: 20,
	origin: "bottom",
	distance: "30px",
	interval: 500,
	scale: 0.5,
	duration: 2000,
});

ScrollReveal().reveal(".hero h1, .hero p, .hero img", {
	delay: 20,
	origin: "bottom",
	distance: "10px",
	scale: 0.5,
	duration: 2000,
});

ScrollReveal().reveal(".faq-head, .faq-para, .faq img", {
	delay: 110,
	origin: "bottom",
	interval: 500,
	duration: 2200,
});

ScrollReveal().reveal(".accordion-item", {
	delay: 110,
	origin: "bottom",
	interval: 600,
	duration: 2200,
});
