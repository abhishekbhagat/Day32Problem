'use strict';
var firstNumber=process.argv[2];
var secondNumber=process.argv[3];
var thirdNumber=process.argv[4];

var max;
var min=firstNumber;
if(firstNumber>secondNumber && firstNumber>thirdNumber)
max=firstNumber;
else if(secondNumber>firstNumber &&  secondNumber>thirdNumber)
max=secondNumber;
else
max=thirdNumber;
if(min>secondNumber)
  {
      min=secondNumber;
      if(min>thirdNumber)
       min=thirdNumber;
  }
  else{
      if(min>thirdNumber)
        min=thirdNumber;
  }
  console.log(firstNumber+secondNumber*thirdNumber);
  console.log(firstNumber%secondNumber+thirdNumber);
  console.log(firstNumber*secondNumber+thirdNumber)
  console.log(thirdNumber+firstNumber/secondNumber);
  console.log(max);
  console.log(min);

