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

// function multipleOfIndex(array) {
//     return array.filter((element,index) => element % index === 0)
//   }


// function binToDec(bin){
//     return parseInt(bin,2)
    
//   }

// var humanYearsCatYearsDogYears = function(humanYears) {
//     let catYears;
//     let dogYears;
    
//     if (humanYears === 1) {
//       catYears = 15
//     } else {
//       catYears = ((humanYears - 2)* 4) + 24
//     }
    
//       if (humanYears === 1) {
//       dogYears = 15
//     } else {
//       dogYears = ((humanYears - 2)* 5) + 24
//     }
    
//     return [humanYears,catYears,dogYears];
//   }

// function add(a,b){
//     return a + b
// }

// function divide(a,b){
//     return a / b
// }

// function multiply(a,b){
//     return a * b
// }

// function mod(a,b){
//     return a % b
// }
   
// function exponent(a,b){
//     return a ** b
// }
    
// function subt(a,b){
//     return a - b
// }

// function nameShuffler(str){
//     return str.split(' ').reverse().join(" ");
//   }

// function findMultiples(integer, limit) {
//     let arr = [];
//     for (let i=integer; i <=limit; i+=integer) arr.push(i)
//     return arr
//   }

// function magNumber(info){
  
//     if (info[0] === "PT92") {
//       return Math.ceil(info[1] * 3 / 17)
//     } else if (info[0] === "M4A1") {
//        return Math.ceil(info[1] * 3 / 30)
//     } else if (info[0] === "M16A2") {
//        return Math.ceil(info[1] * 3 / 30)
//     } else if (info[0] === "PSG1") {
//        return Math.ceil(info[1] * 3 / 5)
//     }
    
//   }
  
// function sumMix(x){
//     return x.map(Number).reduce((a,b) =>a+b)
//   }


// function toFreud(string) {
//     if (string === ''){
//       return ""
//     } else {
//       let arr = string.split(' ')
//       return arr.map(a => 'sex').join(' ')
//     }
//     }

// function even_or_odd(number) {
//     return number % 2 == 0 ? 'Even' : 'Odd'
//   }

// function countBy(x, n) {
//     var z = [];
//     for (i = 1; i <= n; i++) {
//         z.push(x * i);
//     }
//     return z;
// }


// function plural(n) {
//     return n < 1 || n > 1;
//   }

// function solution(a, b){
//     if (a.length > b.length) {
//       return b + a + b
//     } else {
//       return a + b + a
//     }
//   }
  
// function opposite(number) {
//     return number * (-1);
// }

// function first(arr, n) {
//     if (n >= 1) {
//       return arr.slice(0,n)
//     } else if (n == 0) {
//       return []
//     } else {
//       return arr.slice(0,1)
//     }
//    }

// function swapValues(args) {
//     return args.reverse();
//   }

// function logicalCalc(arr, op){
//     if (op == "AND") {
//       return arr.reduce((a,b)=>a && b)
//     } else if (op == 'OR') {
//       return arr.reduce((a,b)=>a || b)
//     } else {
//       return arr.reduce((a,b)=> ( a && !b ) || ( !a && b ))
//     }

// function divisibleBy(numbers, divisor){
//     return numbers.filter(nums => nums % divisor === 0)
//   }

// function uefaEuro2016(teams, scores){
//     if (scores[0] == scores[1]) {
//       return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
//     } else if (scores[0] > scores[1]) {
//       return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
//     } else {
//       return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
//     }
//   }


// function warnTheSheep(queue) {
//     const position = queue.reverse().indexOf('wolf');
//     return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
//   }


// function toCsvText(array) {
//     return array.map(String).join('\n')
//  }


// function grow(x){
//     let sortedArray = x.sort((a,b) => a - b)
//     return sortedArray.reduce((a,b) => a*b)
    
//   }

// function arr (n) {
//     let newArr = []
//     for (let i = 0; i <n;i++){
//       newArr.push(i)
//     }
//     return newArr
//   }

// function differenceInAges(ages){
//     let arr = []
//     let sorted = ages.sort((a,b)=> a-b)
//     arr.push(sorted[0])
//     arr.push(sorted[sorted.length-1])
//     let difference = sorted[sorted.length-1] - sorted[0]
//     arr.push(difference)
//     return arr
//   }
  
// function check(a,x){
//     return a.includes(x)
//   };


// function sumOfDifferences(arr) {
//     let sortedArray = arr.sort((a,b) => b-a)
//     if (sortedArray.length < 2) {
//       return 0
//     } else {
//       return sortedArray[0] - sortedArray[sortedArray.length - 1]
//     }
    
//   }


// var ArrowFunc = function(arr) {
//     return arr.map( a => String.fromCharCode(a) ).join(''); //Complete this function
//   }

// websites.push("codewars")


// var findAverage = function (nums) {
//     let total = nums.reduce((a,b)=> a + b)
//     return total / nums.length 
//   }


// function arr2bin(arr){
//     const filtered = arr.filter(a => typeof a === 'number' )
//     return filtered.reduce((a,b) => a+b , 0).toString(2)
//   }

// function printArray(array){
//     return array.join(',')
//   }

// function monkeyCount(n) {
//     let arr = []
//     for (let i = 1; i <= n;i++ ) {
//       arr.push(i)
//     }
//       return arr
//     }


// /* 7 kyu problems*/



// function filter_list(l) {
//     return l.filter((a)=> typeof a === "number");
//   }




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

// function barista(coffees){
//     let totalTime = 0;
//     let waitTime;
//     let sortedOrders = coffees.sort((a,b) => a - b);
//     coffees.reduce((previous, current, index) => {
//       if (index < 1) {
//         waitTime = current;
//       } else {
//         waitTime = previous + current +2
//       }
//       totalTime += waitTime
//       return waitTime
//     }, 0)
    
//     return totalTime
// }

// function getCount(str) {
//     var vowelsCount = 0;
//     let arr = str.split('')
//     arr.forEach(a => {
//       if ((a === 'a') || (a === 'e') || (a === 'i') || (a === 'o') || (a === 'u')) {
//         vowelsCount += 1
//       }
//     })
//     return vowelsCount;
//   }

// function chain2 (v, fns) {
//     return fns.reduce((v, fn) => { return fn(v) }, v);
//   }

// function descendingOrder(n){
//     let str = String(n)
//     let arr = str.split('')
//     let nums = arr.map(Number)
//     let sorted = nums.sort((a,b) => b-a)
//     return Number(sorted.join(''))
//   }

// function sumTwoSmallestNumbers(numbers) {  
//     let sorted = numbers.sort((a,b) => a-b)
//     return sorted[0] + sorted[1]
//   }

/// // /* 6 kyu problems*///

/* let findUniq = arr => arr.find(a => arr.indexOf(a) === arr.lastIndexOf(a)) */