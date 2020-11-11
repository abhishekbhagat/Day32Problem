var num=process.argv[2];
var n=parseInt(num);
var nthHarmonic=1;
for(i=2;i<=n;i++)
{
    nthHarmonic+=1/i;
}
console.log(nthHarmonic);
