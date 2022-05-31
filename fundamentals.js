/*
************************************

*************************************
    8 kyu problems
*************************************

*************************************
*/

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