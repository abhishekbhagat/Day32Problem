
var number=new Array();
var max=0;
for(var i=0;i<5;i++)
{
 number[i]=getThreeDigitNumber();
 if(number[i]>max)
    max=number[i];
}
function getThreeDigitNumber(){
    var count=0;
    var threeDigitNum=0;
    while(true)
    {
       var digit= Math.floor(Math.random()*10);
       if(digit==0 &&count==1)
       {

       }
       else{
        threeDigitNum=threeDigitNum*10+digit;
        count++;
       }
       if(count==3)
       break;
   }
   return threeDigitNum;
}
console.log(number);
console.log(max);