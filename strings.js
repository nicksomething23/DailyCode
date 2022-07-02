/*
************************************

*************************************
    8 kyu problems
*************************************

*************************************
*/

function makeUpperCase(str) {
  return str.toUpperCase()
}

function add(a, b){
	return a == b
}

function bonusTime(salary, bonus) {
  if (bonus == true) {
    
    return `£${salary * 10}`
  } else {
    return `£${salary}`
  }
}

function isLockNessMonster(s) {
  if (s.includes("tree fiddy") || s.includes("three fifty") || s.includes("3.50")) {
    return true
  } else {
    return false
  }
  }

function feast(beast, dish) {
  if ((beast[0] == dish[0]) && (beast[beast.length -1] == dish[dish.length -1])) {
    return true
  } else {
    return false
  }
}

function shortcut (string) {
  let vowels = ['a','e','i','o','u']
  return string.split('').filter(element => !vowels.includes(element)).join('')
}

function numberToString(num) {
  return String(num)
}

function correct(string){
  return string.replaceAll("5","S").replaceAll("1","I").replaceAll("0","O")
}

function greet(name){
  return `Hello, ${name} how are you doing today?`
}

function repeatStr (n, s) {
  let total = ''
  for (let i = 1; i <= n ; i++) {
    total += s
  }
  return total
}

function removeChar(str){
  return str.slice(1, str.length - 1);
};


function defineSuit(card) {
  let finalStr = card[card.length-1]
  if (finalStr === '♣') {
    return 'clubs'
  } else if (finalStr === '♦') {
    return 'diamonds'
  }else if (finalStr === '♥') {
    return 'hearts'
  } else {
    return 'spades'
  }
}

let removeExclamations = str => str.replaceAll("!", "");


var countSheep = function (num){
    let result = ''
    for(let i=1; i <= num;i++) {
      result += `${i} sheep...`
    }
    return result
   
  }

  function doubleChar(str) {
    return str.split('').map(a => a+a).join('')
  }
  
  function booleanToString(b){
    return b ? "true" : "false"
  }

  function solution(str){
    return str.split("").reverse().join("")
  }

  function reverseWords(str){
    return str.split(" ").reverse().join(" ")
  }

  function correctTail(body, tail){
    return body[body.length-1] === tail
  }
  

/*
************************************

*************************************
    7 kyu problems
*************************************

*************************************
*/

function getMiddle(s) {
  const length = s.length;
  const middle = Math.floor(length/2);
  
  if(length % 2 === 0) {
    return s[middle - 1] + s[middle];
  } else {
    return s[middle];
  }
}

function reverseWords(str) {
  //p strings. any data types other than characters? Does case matter? 
  //R return to console
  //E apple => elppa
  // a b c d => a b c d 
  //truen into array, reverse, letters, join into string. split into array as whole words, reverse and join
  
  return str.split('').reverse().join('').split(' ').reverse().join(' ')
  
  
}


function disemvowel(str) {
  const vowels = ["a", "e", "i", "o", "u","A", "E", "I", "O", "U"]
  return str.split("").filter(a => !vowels.includes(a)).join("")
  }

function squareDigits(num){
  let concatenedStringNumber = String(num).split('').map(a => a*a).join('')
  return Number(concatenedStringNumber)
}

function solution(str, ending){
  return str.endsWith(ending) 
}

function isIsogram(str){

// return isogram. no repeating letters at all string. empty string === true
//P - no nums. ignore lowercase. 
//R - Return

//E - isIsogram('Arrivederci') === false
//    isIsogram('Hello') === false
//    isIsogram('isogram') === true
//    grab string and set to lowerCase
//    check for repeated values. turn string into array, use set to remove duplicates
//    compare new set to original str


  let string = str.toLowerCase()
  let arr = string.split('')
  let removedRepeatingLetters = [...new Set(arr)].join('')
  if (string === '') {
    return true
  } else if (string !== removedRepeatingLetters) {
    return false
  } else {
    return true
  }
}

function DNAStrand(dna){
  // P: string of letters. Does case matter? will it have any numbers/values other than characters? 
  // R: return to console
  // E: "ATCG" === "TAGC" .....
  // P: create object that switches the characters
  // split into array
  // mao function using the object and join the string back together

  let obj = {A:'T', T:'A', C:'G', G:'C'};
  return dna.split('').map(c=> obj[c]).join('')
}








/*
************************************

*************************************
    6 kyu problems
*************************************

*************************************
*/