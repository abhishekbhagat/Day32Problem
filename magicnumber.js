var magicNumber=process.argv[2];
var start =0;
var end=100;

while(start<end){
    var mid=parseInt((start+end)/2);
    if(mid==magicNumber)
    {
        console.log( "Magic Number is  reached  at  start = " +start +"end = "+end);
        break;
    }
    else if(magicNumber>mid)
      {
          start=mid;
      }
    else if(magicNumber<mid)
    {
        end=mid;
    }
}

