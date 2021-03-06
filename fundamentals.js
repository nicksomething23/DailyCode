/*
************************************

*************************************
    8 kyu problems
*************************************

*************************************
*/
function oddCount(n){
  let total = 0; 
  for(let i =1; i < n; i+=2) {
    total += 1
  }
  return total
}

function updateLight(current) {
  if (current === "green") {
    return "yellow"
  } else if (current === "yellow") {
      return "red"
  } else {
    return "green"
}
}

function greet (name, owner) {
  if (name === owner) {
    return 'Hello boss'
  } else {
    return 'Hello guest'
  }
}

function paperwork(n, m) {
  if ((n < 0) || (m < 0)) {
    return 0
  } else {
    return n * m
  }
}


function lovefunc(flower1, flower2){
  if ((flower1 % 2 == 0) && (flower2 % 2 == 0)) {
    return false
  } else if ((flower1 % 2 !== 0) && (flower2 % 2 !== 0)) {
    return false
  } else {
    return true
  }
}

// let laLigaGoals = 43;
// let championsLeagueGoals = 10;
// let copaDelReyGoals = 5;

// let totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;

function isDivisible(n, x, y) {
  return (n % x === 0) && (n % y === 0)
}

var summation = function (num) {
  let count = 0
  for (let i = 1; i <= num; i++) {
    count += i
  }
  return count
}

function enough(cap, on, wait) {
  let currentSpace = cap - on
  if (currentSpace >= wait) {
    return 0
  } else {
    return wait - currentSpace
  }
}

function rentalCarCost(d) {
  let totalDaysCost = d * 40
  if (d >= 7) {
    return totalDaysCost - 50
  } else if (d >= 3) {
    return totalDaysCost - 20
  } else {
    return totalDaysCost 
  }
}

function hero(bullets, dragons){
  return bullets >= (dragons * 2)
}

function simpleMultiplication(number) {
  if (number % 2 === 0) {
    return number*8
  } else {
    return number*9
  }
}


function greet(name){
  if(name === "Johnny") {
   return "Hello, my love!"; 
  } else {
     return `Hello, ${name}!`;
  }
}

const century = year => Math.ceil(year/100)

function litres(time) {
  return Math.floor(time * .5);
}

function basicOp(operation, value1, value2) {
  switch (operation) {
      case '+':
          return value1 + value2;
      case '-':
          return value1 - value2;
      case '*':
          return value1 * value2;
      case '/':
          return value1 / value2;
      default:
          return 0;
  }
}

const greet = () => `hello world!`

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}


function setAlarm(employed, vacation){
  if (employed == true && vacation == false) {
    return true
  } else {
    return false
  }
}

function getAge(inputString){
  let arr = inputString.split(' ')
  let number = arr.map(Number).filter(x => x)
  let str1 = String(number)
  return Number(str1)
}

function finalGrade (exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100
  } else if (exam > 75 && projects >= 5) {
    return 90
  } else if (exam > 50 && projects >= 2) {
    return 75
  } else {
    return 0
  }
}

const areaOrPerimeter = function(l , w) {
  if (l !== w) {
    return l + l + w + w
  } else if (l === w) {
    return l * w
  }
};

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // P => how far, mpg, amount left always positive? no
  //R => 1 or 0 
  // multiply fuel left by mpg. if amount matches distance or is greater, then true otherwise false
  
  let totalMilesLeft = mpg * fuelLeft
  
  return totalMilesLeft >= distanceToPump
};


function makeNegative(num) {
  return num < 0 ? num : num * -1
 }

 
function isDivideBy(number, a, b) { 
  if ((Math.abs(number % a === 0)) && (Math.abs(number % b === 0))) {
    return true
  } else {
    return false
  }
}

function bmi(weight, height) {
    let bmi = weight / (height*height)
    if (bmi <= 18.5) {
      return "Underweight"
    } else if (bmi <= 25.0) {
      return "Normal"
    } else if (bmi <= 30.0) {
      return "Overweight"
    } else {
      return "Obese"
    }
    
  }


  const stringToNumber = str => Number(str)

/*
************************************

*************************************
    7 kyu problems
*************************************

*************************************
*/

function isSquare (n) {
  return Math.sqrt(n) % 1 === 0
 }

function SeriesSum(n) {
    let sum = 0
    for (let i = 0; i < n; i++) {
      sum += 1 / (i*3 + 1)
    }
    return sum.toFixed(2)
  }


  function isTriangle(a,b,c) {
    return (a+b > c) && (a+c > b) && (b+c > a)
  }

/*
************************************

*************************************
    6 kyu problems
*************************************

*************************************
*/