var num = process.argv[2];
var number=parseInt(num);
console.log("prime factors = ")
for(i=2;i<=Math.sqrt(number);i++){
    if(number%i==0){
     console.log(i);
     number=number/i;
     i=1;
    }
     
}
console.log(number);