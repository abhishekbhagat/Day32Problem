var num = process.argv[2];

if(checkpalindrome(num))
console.log("palindrome");
else 
console.log("Not palindrome")
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