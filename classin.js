class student 
{
   constructor(name,rollNo,id,phone,address) 
   {
    this.name = name
    this.rollNo = rollNo
    this.id = id
    this.phone = phone
    this.address = address
   }  
}
let st = new student("Nikita", 102, 123, 9876543210, "Address line comes here")
console.log(st)
/*console.log("Name of student is: "+st.name)
console.log("id of student is: "+st.id) */

let st1 = new student("Aditya Soni", 103, 113, 987654345, "Address comes here")
console.log(st1)
let st2 = new student("baburao",121,34,7864565468,"kolhapur")
console.log(st2)

let st3 = new student("Aditya Gupta")
console.log(st3)

st2.ssiId = 111
console.log(st2.ssiId)
console.log(st)
console.log(st1)
console.log(st2)

let student = {}
console.log(student)

student.name = "abc"
student.rollNo = 199
student.Id = 190
student.phoneNumber = 7898767876
student.address = "gfhfhi"