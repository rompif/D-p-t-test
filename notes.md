# Notes JavaScript


## Outils
*  Node JS
*  VisualStudioCode
* Documentation: https://developer.mozilla.org/fr/ 

## Syntaxe
* Les noms de variables et de fonction doivent être en Anglais 
* Camel Case = `voiciMaVariable`
* Pascal Case = `VoiciMaVariable` 

## Bases
* Affichage dans le terminal
``` js
console.log('Hello World')
``` 

* Déclarer une variable 
``` js
var maVariable = "Bonjour"
``` 
* Les commentaires 
```js
//Voici mon commentaire
```
 
## Infos supplémentaires
* Langage à typage faible
* Opérations mathématiques limitées
* `;` facultatifs


## Déclarer une variable
```js
var maVariable = "Bonjour" //Il ne faut plus l'utiliser !
const pi = 3.14 //Création d'une constante
let text = "Voici mon texte" // Réassignation possible
```


## Les Tableaux 
* Création d'un tableau 
``` js
const myArray = ["Element 1", "Element 2"] 
```

```js
myArray [1] = "Element 2bis" //Remplacement d'un élément à l'index 1 dans le tableau
```

```js
myArray.push("Element 3") //Ajout un élément en fin de tableau
```

``` js
myArray[0] = [1,2,3] //Tableau dans un tableau
```

* Méthode Splice --> Supprimer ou Remplacer des éléments
```js
myArray.splice(2,1,'Test')
//Supprimer 1 élément à l'index 2 et le remplace par "Test"
```
```js
myArray.splice(2,0,'Test');
//Supprime 0 élément et ajoute à l'index 2 "Test"
```

## Les Fonctions
### Déclaration de fonction
* Le nom de la fonction
* Une liste d'arguments à passer à la fonction, entre parenthèses et séparer par des virgules.
* Les instructions JavaScript définissant la fonction entre accolades {}
```js
function aireCarré(cote) {
  return cote * cote
}
```

### Fonctions fléchées
* Cela permet d’avoir une syntaxe plus courte
```js
const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));
// Expected output: Array [8, 6, 7, 9]

```

## Spread syntax
* La syntaxe de décomposition permet d'étendre un itérable (par exemple une expression de tableau ou une chaîne de caractères) en lieu et place de plusieurs arguments (pour les appels de fonctions)
```js
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// Expected output: 6

console.log(sum.apply(null, numbers));
// Expected output: 6

```
## RegExp 
* Un objet RegExp est utilisé pour étudier les correspondances d'un texte avec un motif donné.
```js
/ab+c/i;                 // notation littérale
new RegExp('ab+c', 'i'); // constructeur
new RegExp(/ab+c/, 'i'); // notation littérale dans un constructeur
```

## Méthode Split()
* La méthode split() divise une chaîne de caractères en une liste ordonnée de sous-chaînes, place ces sous-chaînes dans un tableau et retourne le tableau. 
```js
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]

```
## Méthode Replace()
* La méthode replace() renvoie une nouvelle chaîne de caractères dans laquelle tout ou partie des correspondances à un modèle sont remplacées par un remplacement.
```js
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// Expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"


const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
// Expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"
```

## Méthode Map()
* La méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
```js
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]
```
# Git & GitHub  

* Lancer Cmd (PowerShell)
* Il est préférable de travailler en ligne de commandes
* Git sauvegarde des versions de  codes de manières instantanée
* Il faut sauvegarder très fréquemment

## Initialiser un dépôt Git --> GitHub
```js
$ mkdir nomDossier
$ git init //Initialiser un dépôt dans le dossier courant
$ git add .
$ git commit -m "Mon premier commit" 
//Créer le projet sur Github.com
//Copier le lien .git
$ git remote add origin "lien.git" 
$ git remote -v
$ git push origin master
```
## DOM
* Représentation hiérarchique d'un document HTML

## Promise 

* L'objet Promise (pour « promesse ») est utilisé pour réaliser des traitements de façon asynchrone. Une promesse représente une valeur qui peut être disponible maintenant, dans le futur voire jamais.

```js
let maPremierePromesse = new Promise((resolve, reject) => {
  // On appelle resolve(...) lorsque notre action asynchrone
  // a réussi et reject(...) lorsqu'elle a échoué.
  // Dans cet exemple, on utilise setTimeout(...) pour simuler
  // du code asynchrone. En situation réelle, on utiliserait
  // plutôt XHR ou une API Web asynchrone.
  setTimeout( function() {
    resolve("Succès !")  // Tout s'est bien passé !
  }, 250)
})

maPremierePromesse.then((messageReussite) => {
  // messageReussite correspond à ce qui a été passé à 
  // la fonction resolve(...) ci-avant.
  console.log("Youpi ! " + messageReussite)
});
```

## Méthode Then()
* La méthode then() renvoie un objet Promise. Elle peut prendre jusqu'à deux arguments qui sont deux fonctions callback à utiliser en cas de complétion ou d'échec de la Promise.
```js
const promise1 = new Promise((resolve, reject) => {
  resolve('Success!');
});

promise1.then((value) => {
  console.log(value);
  // Expected output: "Success!"
});
```

## API Fetch
* Chercher la donnée est l'affiche de manière intelligible
* L'API Fetch fournit une interface pour la récupération de ressources

