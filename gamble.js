var rupee=100;
var noOfBet=0;
var noOfWin=0;
const WIN=1;
while(rupee>0 && rupee<200){
    var choice=Math.floor(Math.random()*10)%2;
    if(choice==WIN)
    {
       noOfWin++;
       rupee++;
    }
    else
     rupee--;
    noOfBet++;       
}
console.log(noOfWin);
console.log(noOfBet);