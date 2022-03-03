/*
************************************

*************************************
    8 kyu problems
*************************************

*************************************
*/

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

/*
************************************

*************************************
    7 kyu problems
*************************************

*************************************
*/
function squareDigits(num){
  let concatenedStringNumber = String(num).split('').map(a => a*a).join('')
  return Number(concatenedStringNumber)
}

function solution(str, ending){
  return str.endsWith(ending) 
}

/*
************************************

*************************************
    6 kyu problems
*************************************

*************************************
*/