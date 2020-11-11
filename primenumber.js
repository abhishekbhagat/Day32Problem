var n=16;
if(checkPrimeNumber(n))
 console.log("primeNumber");
else
console.log("Not prime Number");
function checkPrimeNumber(num){
    for(i=2;i<Math.sqrt(num);i++)
    {
        if(num%i==0)
          return false;
    }
    return true;
}