/*
************************************

*************************************
    8 kyu problems
*************************************

*************************************
*/

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



/*
************************************

*************************************
    6 kyu problems
*************************************

*************************************
*/