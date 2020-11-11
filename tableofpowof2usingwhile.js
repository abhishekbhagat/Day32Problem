var num = process.argv[2];
var number=parseInt(num);
var i=1;
var value=1;
while(i<=number && value < 256)
{
    value=Math.pow(2,i);
    console.log("2 pow of  " +i +" = "+value);
    i++;
}