const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const banner = document.getElementById("banner");
const bannerImg = banner.querySelector(".banner-img");
const bannerText = banner.querySelector("p");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

let currentSlide = 0;

arrowLeft.addEventListener("click", () => {
	if (currentSlide === 0) {
		currentSlide = 3;
	} else {
		currentSlide = currentSlide - 1;
	}
	displaySlide();
});

arrowRight.addEventListener("click", () => {
	if (currentSlide === 3) {
		currentSlide = 0;
	} else {
		currentSlide = currentSlide + 1;
	}
	displaySlide();
});


const displaySlide = () => {
	bannerImg.src = './assets/images/slideshow/' + slides[currentSlide].image;
	bannerImg.alt = slides[currentSlide].image;
	bannerText.innerHTML = slides[currentSlide].tagLine;
	updateDots();

}


for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("div");
	let dots = document.querySelector("div.dots");
	dot.classList.add("dot");
	if (i === 0) dot.classList.add("dot_selected");

	dot.addEventListener("click", () => {
		currentSlide = i;
		displaySlide();
	});
	dots.appendChild(dot);
}

const updateDots = () => {
	const dots = document.querySelectorAll(".dot");
	dots.forEach((dot, i) => {
		dot.classList.toggle("dot_selected", i === currentSlide);
	});
};

