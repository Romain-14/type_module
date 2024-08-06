# Le type module en JS

## SANS type module

Il faut mettre les fichiers JS dans l'ordre d'importation.

Inconvénients :

- beaucoup de script à charger dans le HTML
- risque d'erreur si l'ordre n'est pas respecté
- pas de gestion des dépendances

Avantages :

- compatibilité avec les anciens navigateurs
- pas de configuration à faire

Exemples :

```html
<script src="const.js"></script>
<script src="utils.js"></script>
<script src="main.js"></script>
<script type="module" src="./js/main.js"></script>
```

```js
console.log(getRandomInteger(1, 10));
console.log(newUrl());
```

## AVEC type Module

Inconvénients :

- pas de compatibilité avec les anciens navigateurs
- besoin d'un serveur pour charger les fichiers

Avantages :

- utilisation du mode strict par défaut
  - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode>
- gestion des dépendances
- pas d'ordre d'importation
- un seul script à charger dans le HTML
- pas de risque d'erreur d'importation (autre que erreur de syntaxe)
- pas de configuration à faire
- les modules sont chargés de manière asynchrone

Exemples :

```js
// import nommé
import { getRandomInteger, newUrl } from "./utils.js";

// import par défaut
import Animal from "./class/Animal.js";

// import tout
import * as utils from "./utils.js";
```

Spécificité:
Nommés :

- on importe ce qui est exporté
- on peut renommer en utilisant "AS"
exemple: import { getRandomInteger AS random, newUrl AS url } from "./utils.js";

Par défaut :

- on importe ce qui est exporté par défaut
- on peut renommer sans utiliser "AS"
- un seul export default par module (fichier) est possible

Exemple :

```js
import { getRandomInteger, newUrl } from "./utils.js";
import Animal from "./class/Animal.js";
import NewAnimal from "./class/Animal.js";

console.log(getRandomInteger(1, 10));
console.log(newUrl());

const rex = new Animal("Rex");
const rex = new NewAnimal("Rex");

console.log("Class Animal ---> ", rex.getName());
```
