//Exercice1
const myArray = [1,2,3,4,5,6,7,8,9,10]
for (let index = 0; index < myArray.length; index++){
    console.log(myArray[index])
}

//Exercice 2
const semaine = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
console.log(semaine[0])

//Exercice 3
const nombresPairs = [2, 4, 6, 8, 10]
let somme = 0
for (let index = 0; index < nombresPairs.length ; index++) {
    somme = somme + nombresPairs[index]
}
console.log(somme)

//Exercice 4
const fruitsTab = ["Pomme", "Fraise", "Kiwi", "Melon", "Ananas"]
fruitsTab.push("Fruit du Dragon")
console.log(fruitsTab)

//Exercice 5
const noteEleve = [20, 15, 9, 12, 5]
let sommeNote = 0
for (let i = 0 ; i < noteEleve.length ; i++) {
    sommeNote = sommeNote + noteEleve[i]
}

let moyenneEleve = sommeNote / noteEleve.length
console.log(moyenneEleve)

//Exercice 6 
const oiseaux = ['Pigeon', 'Merle', 'Colombe', 'Corbeau']
for (let index = 0; index < oiseaux.length; index++) {
    if (oiseaux[index] === 'Merle'){
    console.log('Trouvé')
    }
}

//Exercice 7
const pays = ["France", "Allemagne", "Zambie", "Russie"]
pays.sort()
console.log(pays)

//Exercice 8
const mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
console.log(mois[2]) 

//Exercice 9 
function getRandInt(randomNumber) {
    return Math.floor(Math.random() * randomNumber);
  }
const randomNumber = []

for (let index = 0; index < 5; index++) {
    randomNumber.push(getRandInt(index * 100))
}

console.log(randomNumber)
console.log(Math.max(...randomNumber))
console.log(Math.min(...randomNumber))


//Exercice 10 
console.log("\nEXERCICE 10 :")

const phrase = ["Je suis informaticien", "Je suis", "J'aime manger", "J","Ceci est un test pour faire la plus longue phrase"]
let phraseSeul = ""
let indexPhrsLongue = []

for (let i = 0; i<phrase.length; i++){

    indexPhrsLongue.push(phrase[i].length)
    // push de la taille des str dans une liste 
    
}

console.log(phrase[indexPhrsLongue.indexOf(Math.max(...indexPhrsLongue))])
// utilisation de la fonction max pour trouver la lenght la plus grande des push fait dans la boucle for
// utilisation de la fonction index pour avoir l'index du max dans la lsite indexPhrsLongue
// dans phrase[..] car après l'utilisation de toutes les fonction on récupère l'index de l'élément le plus grands qui correspond 
// a l'index de la phrase la plus grande dans la liste `phrase`