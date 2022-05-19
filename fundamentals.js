/*
************************************

*************************************
    8 kyu problems
*************************************

*************************************
*/
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