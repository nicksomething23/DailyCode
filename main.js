/* 8 Kyu Problems */


// const rps = (p1, p2) => {
//     if ((p1 === 'paper' && p2 ==='scissors') || (p1 === 'scissors' && p2 ==='rock') || (p1 === 'rock' && p2 ==='paper')) {
//       return "Player 2 won!"
//     } else if ((p2 === 'paper' && p1 ==='scissors') || (p2 === 'scissors' && p1 ==='rock') || (p2 === 'rock' && p1 ==='paper')) {
//       return "Player 1 won!"
//     } else {
//       return "Draw!"
//     }
//   };

// function sum (numbers) {
//   "use strict";
// if (numbers.length === 0) {
// return 0;
// } else {
// return numbers.reduce((a,b) => a += b ,0)
// }


// };

// function removeEveryOther(arr){
//   //your code here
//   let newArr = []
//   for (let i = 0; i < arr.length; i += 2) {
//     newArr.push(arr[i])
//   }
  
//   return newArr
// }

// function check(a, x) {
//   return a.includes(x)
// }

// function howMuchILoveYou(nbPetals) {
//   return ['I love you','a little','a lot','passionately','madly','not at all'][(nbPetals-1) % 6]
    
//   }

// function array(arr){
//     let newStr = arr.split(',')
//     newStr.pop()
//     newStr.shift()
//     let finalStr = newStr.join(' ')
//     if (finalStr == '') {
//       return null
//     } else {
//       return finalStr
//     }
//   }
  
// function squareOrSquareRoot(array) {
//     return array.map(x => {
//       let isXSquared = Math.sqrt(x)
//      if (isXSquared % 1) {
//         return x*x
//      } else {
//        return Math.sqrt(x)
//        }
//    })
//  }


// function arrayPlusArray(arr1, arr2) {
//     let finalArr = arr1.concat(arr2)
//     return finalArr.reduce((a,b) => a += b ,0)
//   }

// function sameCase(a, b){
//     if ((a >= 'a' && a <= 'z') && (b >= 'a' && b <= 'z')) {
//       return 1
//     } else if ((a >= 'A' && a <= 'Z') && (b >= 'A' && b <= 'Z')) {
//       return 1
//     } else if ((a >= 'a' && a <= 'z') && (b >= 'A' && b <= 'Z')) {
//       return 0
//     } else if ((a >= 'A' && a <= 'Z') && (b >= 'a' && b <= 'z')) {
//       return 0
//     } else {
//       return -1;
//     }

// /* 7 kyu problems*/


// function sumDigits(number) {
//     if (number < 0) {
//       number *= -1
//     }
//     let newString = String(number).split('')
//     return newString.map(Number).reduce((a,b) => a += b,0)
    
    
//   }
  