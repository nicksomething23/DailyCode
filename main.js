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

// /* 7 kyu problems*/


// function sumDigits(number) {
//     if (number < 0) {
//       number *= -1
//     }
//     let newString = String(number).split('')
//     return newString.map(Number).reduce((a,b) => a += b,0)
    
    
//   }
  