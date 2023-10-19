/*
for(var i=1; i<=5; i++) { 
  var a= " ";  
  for(var j=1; j<=i; j++) {
   a +="*";   
  }  
  console.log(a)
}

myArray=["x","hello",1,true]
console.log(myArray)
myArray.forEach(element => { 
  console.log(element) 
 
})
 for(const[index,value]of Object.entries(myArray))
console.log(index,+value)  
*/

 let myMap = new Map();
myMap.set(1,"aditya");
myMap.set(2,"nikita");
myMap.set(3,"pragya");
myMap.set(4,"adarsh");
myMap.set(5,"aman");
myMap.set(6,"som");

myMap.forEach((value,key) => {
 console.log("key:"+key,"value:"+value) 
});



