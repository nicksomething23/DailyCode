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

// function betterThanAverage(classPoints, yourPoints) {
//     let avgClassPoints = classPoints.reduce((a,b)=> a+b,0) / classPoints.length
//     if (yourPoints > avgClassPoints) {
//       return true
//     } else {
//       return false
//     }
//   }

// function isVow(a){
//     return a.map(a => {
//       if (a == 101 || a == 117 || a == 97 || a == 105 || a == 111) {
//         return String.fromCharCode(a)
//       } else {
//         return a
//       }
//     })
//   }

// function getGrade (s1, s2, s3) {
//     let sumOfNums = s1+s2+s3
//     let avgOfNums = sumOfNums / 3
    
//     if (avgOfNums >= 90 ) {
//       return 'A'
//     } else if (avgOfNums >= 80 ) {
//       return 'B'
//     } else if (avgOfNums >= 70 ){
//       return 'C'
//     } else if (avgOfNums >= 60 ){
//       return 'D'
//     } else {
//       return 'F'
//     }
//   }

// function fixTheMeerkat(arr) {
//     let newArr = [];
//     newArr.push(arr[2]);
//     newArr.push(arr[1]);
//     newArr.push(arr[0]);
//     return newArr;
//   }

// function getAverage(marks){
//     let totalArr = marks.reduce((a,b) => a + b , 0)
//     return Math.floor(totalArr / marks.length)
//   }


// function twoSort(s) {
//     const sorted = s.sort()
//     let firstStr = sorted[0]
//     return firstStr.split('').join('***')
    
//     }

// function all( arr, fun ){
//     return arr.every(fun)
//   }

// /* 7 kyu problems*/


// function sumDigits(number) {
//     if (number < 0) {
//       number *= -1
//     }
//     let newString = String(number).split('')
//     return newString.map(Number).reduce((a,b) => a += b,0)
    
    
//   }
  
// function openOrSenior(data){
//     const result = []
//     data.forEach(x => {
//     if ((x[0] >= 55) && (x[1] > 7)) {
//       result.push('Senior') 
//     } else {
//       result.push('Open') 
//     }
//   })
//     return result
//   } 


// function nbYear(p0, percent, aug, p) {
//     let year = 0;
//     while (p0 < p) {
//       year++
//       p0 = Math.floor(p0 + (p0*percent/100) + aug);
//     }
//     if (p0 >= p) {
//         return year;
//     }
//     return year;
//   }

// function solution(nums){
//     if(nums === []) {
//       return [];
//     } else if(nums === null) {
//       return [];
//     } else {
//       return nums.sort((a, b) => a - b)
//     }
//   }