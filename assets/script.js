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

function moveSlides(n){
	showSlides(n)
}

function showSlides(n) {
	var slides = document.getElementsByClassName("arrow");
	if(n == 1){
		alert('arrow right');
		console.log(slides);
	}
	if(n == -1){
		alert('arrow left');
		console.log(slides);
	}

}
