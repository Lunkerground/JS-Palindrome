function reset() {

	// --------<< Variables >>--------

	var mot = prompt("Veuillez saisir un mot");

	var saisi = document.getElementById("mot");

	var min = document.getElementById("min");

	var maj = document.getElementById("maj");

	var conVoy = document.getElementById("conVoy");

	var inverse = document.getElementById("inverse");

	var palyn = document.getElementById("palyn");

	// --------<< Mot saisi en gras et couleur >>--------

	saisi.innerHTML = mot;
	saisi.style.color = "green";
	saisi.style.fontWeight = "bold";

	// --------<< Mot en minuscule >>--------

	min.innerHTML = mot.toLowerCase();

	// --------<< Mot en majuscule >>--------

	maj.innerHTML = mot.toUpperCase();

	// --------<< Nombre de Voyelles et Consonnes >>--------

	var resultat = voyelles(mot);

	conVoy.innerHTML = "Nombre de voyelles : " + resultat.nbVoy + " Nombre de consonnes : " + resultat.nbCon;

	// --------<< Mot inversé >>--------

	var inv = "";

		for (i = mot.length - 1; i >= 0; i--) {
			inv = inv + mot[i];
		}

	inverse.innerHTML = inv;

	// --------<< Palyndrome >>--------

	var reponse = "";

	if (inv.toLowerCase() == mot.toLowerCase()) {
			reponse = "C'est un palyndrome.";
		} else {
			reponse = "Ce n'est pas un palyndrome.";
		}

	palyn.innerHTML = reponse;

	// --------<< Historique >>--------

	var histo = document.getElementById("histo");

	histo.innerHTML = mot + histo.innerHTML;

}

// --------<< Fonctions >>--------

function voyelles(mot) {

	mot = mot.toLowerCase();

	var nbVoyelles = 0;

	var nbConsonnes = 0;

	var aeiouy = ["a", "e", "i", "o", "u", "y", "é", "à", "è", "ê", "ù"];

	for (var m = 0; m < mot.length; m++) {
		for (var v = 0; v < aeiouy.length; v++) {
			if (mot[m] == aeiouy[v]) {
				nbVoyelles++;
			}
		}
	}

	nbConsonnes = mot.length - nbVoyelles;

	var res = {nbVoy : nbVoyelles,	nbCon : nbConsonnes}

	return res;

}