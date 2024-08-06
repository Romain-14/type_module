// Le type module en JS:

// SANS type module 
// il faut mettre les fichiers JS dans l'ordre d'importation
// inconvénients : 
// - beaucoup de script à charger dans le HTML
// - risque d'erreur si l'ordre n'est pas respecté
// - pas de gestion des dépendances

// avantages :
// - compatibilité avec les anciens navigateurs
// - pas de configuration à faire



// Dans le HTML
// <script src="const.js"></script>
// <script src="utils.js"></script>
// <script src="main.js"></script>
// <script type="module" src="./js/main.js"></script>


// console.log(getRandomInteger(1, 10));
// console.log(newUrl());


// AVEC type Module
// inconvénients :
// - pas de compatibilité avec les anciens navigateurs
// - besoin d'un serveur pour charger les fichiers


// avantages :
// - utilisation du mode strict par défaut: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
// - gestion des dépendances
// - pas d'ordre d'importation
// - Un seul script à charger dans le HTML
// - pas de risque d'erreur d'importation (autre que erreur de syntaxe)
// - pas de configuration à faire
// - les modules sont chargés de manière asynchrone


// comment importer un module
// import nommé : import { getRandomInteger, newUrl } from "./utils.js";
// import par défaut : import Animal from "./class/Animal.js";
// import tout : import * as utils from "./utils.js";

// Spécificité:
// Nommés :
// - on importe ce qui est exporté
// - on peut renommer en utilisant "AS"
// exemple: import { getRandomInteger AS random, newUrl AS url } from "./utils.js";

// Par défaut :
// - on importe ce qui est exporté par défaut
// - on peut renommer sans utiliser "AS"
// - un seul export default par module (fichier) est possible

import { getRandomInteger, newUrl } from "./utils.js";
import Animal from "./class/Animal.js";
// import NewAnimal from "./class/Animal.js";

console.log(getRandomInteger(1, 10));
console.log(newUrl());

const rex = new Animal("Rex");
// const rex = new NewAnimal("Rex");

console.log("Class Animal ---> ", rex.getName());