var start=2;
var end=100;
for(i=start;i<=end;i++){
    if(checkPrimeNumber(i))
    console.log( i+ " is Prime Number");
}
function checkPrimeNumber(num){
    var flag=0;
    for(j=2;j<=Math.sqrt(num);j++)
    {
        if(num%j==0)
        {
          return false;
        }
    }
    return true;
}