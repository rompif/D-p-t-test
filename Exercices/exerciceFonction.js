// Exercice 1
function addition(premierNombre, deuxiemeNombre) {
    let somme = premierNombre + deuxiemeNombre
    return somme
}
console.log (addition(2, 3))

// Exercice 2
const tabNombre = [2, 99, 1001, 7]
console.log(Math.max(...tabNombre))

//Exercice 3
const sansVoyelle = 'Bonjour animal'
const uniquementConsonne = sansVoyelle.replace(/[aeiouy]/g, '') //g permet de répéter les actions
console.log(uniquementConsonne)

//Exercice 4 --> sort

//Exercice 5
function numberToWords(num) {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']


if (num < 10) {
    return ones[num]    
}   else if (num < 20) {
    return teens[num - 10]
}   else {
    return tens[Math.floor(num / 10)] + '-' + ones[num % 10]
}
}
console.log(numberToWords(58))

//Exercice 6
const objectArray = [
    { firstname: 'Romain', age: 29 },
    { firstname: 'Théophile', age: 22 },
    { firstname: 'Clément', age: 45 },
    { firstname: 'Maxime', age: 70},
]

const getPropertyValues = (objectArray, str) => 
{
    return objectArray.map((obj => obj[str]))
}

console.log(getPropertyValues(objectArray, 'age'))

//Exercice 7
function decroissant(numbers){
    return numbers.sort((a, b) => b - a)
}

const tabNumbers = [1, 7, 22, 999, 100000]

const resultat = decroissant(tabNumbers)

console.log(resultat)

//Exercice 8
const majVowels = (str) => {
    return str.replace(/[aeiou]/i, (vowel) => vowel.toUpperCase())
}

//Exercice 9
const countVowels = (str) => {
    return str.replace(/[aeiouy]/gi, || [],).lenght
}

//Exercice 10
const capitalizeCons = (str) => {
    return str.replace(/[âeiouy]/i, cons => cons.toUpperCase())
}