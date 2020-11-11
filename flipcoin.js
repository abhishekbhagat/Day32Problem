var countHead=0;
var countTail=0;
while(countHead<11 && countTail<11)
{
    var choice=Math.floor(Math.random()*10)%2;
    if(choice==0)
     countHead++;
     else
     countTail++;
}
console.log(countHead);
console.log(countTail);
