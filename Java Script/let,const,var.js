// let,const,var 
// var : Variable can be re-declared & updated. A global scope variable.
// let : Variable cannot be re-declared but can be updated. A block scope variable.
// const : Variable cannot be re-declared or updated. A block scope variable.

// currently let and const are widely used 

const PI=3.14;
console.log(PI);

let a;
a=10;
console.log(a);

{
    let a=5;
    console.log(a); //block
}
// object is a collection of values

const student ={
    fullName: "Rahul",
    age: 20,
    cgpa: 8,
    isPass: true,
};

// to asign a new value to the existing object

student["age"]=student["age"]+1;
console.log(student["age"]);