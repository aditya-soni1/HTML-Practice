function checkeven(input) 
{
   if (input%2==0) {
   //console.log(input + " number is even"  ) 
   return "even";
} else{
    //console.log(input + " number is odd")
    return "odd";   
}
}
b=checkeven(65) 
console.log(b)