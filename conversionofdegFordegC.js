var choice=process.argv[2]; 
var deg=process.argv[3];
switch(parseInt(choice))
{
case 1:
    console.log((deg *9/5)+32);
    break;
case 2:
     console.log((deg-32)* 5/9);
     break;
default:
    console.log("enter valid choice ");
}