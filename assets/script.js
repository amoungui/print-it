const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

var dotsDiv = document.getElementsByClassName("dots")[0]; // Obtenez la référence de la div

for (var i = 0; i < slides.length; i++) {
	var span = document.createElement("span"); // Créez un nouvel élément span
	span.className = "dot"; // Ajoutez la classe 'dot' à l'élément span
	if (i === 0) {
		span.className += " dot_selected"; // Ajoutez la classe 'dot_selected' au premier élément
	}
	dotsDiv.appendChild(span); // Ajoutez l'élément span à la div
}

var slideIndex = 0;
showSlides(slideIndex);

function moveSlides(n){
	showSlides(slideIndex += n);
}

function showSlides(n) {
	var i;
	var slidesDiv = document.getElementById("slider-content");// Obtenez la référence de la div d'id slider-content
	var dots = document.getElementsByClassName("dot");// obtenir la référence des point dot
	if (n >= slides.length) {slideIndex = 0} // on check si n est supérieur à la taille su slide alors on réinitialise
	if (n < 0) {slideIndex = slides.length - 1} // même logique mais l'on se place à la dernière slide
	
	// On nettoie la div
	while (slidesDiv.firstChild) {
		slidesDiv.removeChild(slidesDiv.firstChild);
	}

	// Ajout de nouveauslide
	slider(slideIndex);

	// mise à jour des dots
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" dot_selected", "");
	}
	dots[slideIndex].className += " dot_selected";
}


function slider(n) {
	let slide = slides[n];
	var customSlider = document.getElementById("banner"); // Obtenez la référence de la div d'id banner
	var slidesDiv = document.getElementById("slider-content");// Obtenez la référence de la div d'id slider-content
	var img = document.createElement("img"); // Créez un nouvel élément img
	var p = document.createElement("p"); // Créez un nouvel élément p
	img.className = "banner-img"; // Créez une class de nom banner-img
	img.src = "./assets/images/slideshow/" + slide.image; // Construction de l'url de l'image
	img.alt = "Banner Print-it"; // Définition d'un texte alternatif par défaut
	p.innerHTML = slide.tagLine; // Inserer le text html dans la balise p
	slidesDiv.appendChild(img)// Ajouter img dans le conteneur banner
	slidesDiv.appendChild(p)// Ajouter p dans le conteneur banner
	customSlider.appendChild(slidesDiv) // Ajouter img dans le conteneur banner
}
