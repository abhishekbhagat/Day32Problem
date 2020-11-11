
var month=process.argv[0];
var dayOfTheMonth=process.argv[1];
console.log(dayOfTheMonth);
console.log(month);
if(month>1&&month<6)
{
   if(month==2 &&dayOfTheMonth <20)
   console.log(false);
   else if(month ==5 &&dayOfTheMonth >20 )
   console.log(false);
   else
   console.log(true);
}
else
console.log(false);
