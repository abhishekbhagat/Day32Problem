var num=7;
if(checkpalindrome(num)){
    if(checkPrimeNumber(num))
      console.log("palindrome and prime also");
    else
    console.log("palindrome but not prime");
}
else
console.log("Not palindrome and prime");
function checkpalindrome(number){
    var copynumber=number;
    var rev=0;
    while(copynumber>0)
    {
        rev=rev*10+(copynumber%10);
        copynumber=parseInt(copynumber/10);
    }
    if(number==rev)
    return true;
    else
    return false;
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