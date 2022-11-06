// In javaScript , Objects is king , if you understand object , you understand javaScript
//OBJECT 
/* // create 
 //1. using an object literal 
const person ={
    fisrtName:"John",
    lastName:"doe", 
    coloreye:"blue",

}
//2. using the new key
const person1 = new Object();
person1.fisrtName = "Nguyen";
person1.fullNamw ="Nguyenvanhiep";
person1.todo = function (voie) {
    console.log("say"+voie);
}
console.log(person1.fullNamw);
//3. umtable ( can change)
        // objects are umtable : they are addressed by reference, not by value
        const a1= person1;
        a1.fullNamw = "nguyen van hiep";
        console.log( person1.fullNamw);
 */

//PROPERTIES
 // accessing javascript properties
 const person1 = new Object();
person1.fisrtName = "Nguyen";
person1.fullNamw ="Nguyenvanhiep";
person1.todo = function (voie) {
    console.log("say"+voie);
}
    //    console.log(person1.fullNamw);
    //    console.log(person1["fullNamw"]);
    //    c = "fullNamw";
    //    console.log(person1[c]);
// Print value of object 
for (const x in person1) {
    console.log(person1[x]);
}

//Adding New Properties
    // you can add new properties to an existing object
    
// delete properties
delete person1.todo;
for (const x in person1) {
    console.log(person1[x]);
}

// object methods
        //What is this?
        // In JavaScript, the this keyword refers to an object.

        // Which object depends on how this is being invoked (used or called).

        // The this keyword refers to different objects depending on how it is used:

        // In an object method, this refers to the object.
        // Alone, this refers to the global object.
        // In a function, this refers to the global object.
        // In a function, in strict mode, this is undefined.
        // In an event, this refers to the element that received the event.
        // Methods like call(), apply(), and bind() can refer this to any object.

 //Display Objects
//....
     //Using JSON.stringify()
    //Any JavaScript object can be stringified (converted to a string) with the JavaScript function JSON.stringify():
   console.log( JSON.stringify(person1));


/* //JavaScript Function Definitions
//1.Function Declarations
function myFunction(a,b) {
    return a*b;
}
console.log(myFunction(3,6));
//2.Function Expressions( anonymous function)
var a = function (c,b) {
    return c- b;
}
console.log(a(12,2));
// 3.arrow functions
    //ES6: delete:"function", "return ", curly brackets
    const  x = (x,y) => x*y;
console.log(x(10,4));
 */
/* 
//JavaScript Function Parameters
function sum(...args) {
    let sum = 0;
    for (const arg of args) {
        sum += arg;

    }
    return sum;
}
let x = sum(2,3,4,5,6,7);
console.log(x); */
/* 
//JavaScript Function Invocation

function myFunction(a,b) {
    console.log(a * b);
    return this;
    //
}
// Invoking a function as a function( global)
myFunction(4,5);

const myObject = 
{
    firstName:"John",
    lastName:"Doe",
    fullName: function () {
        return this.firstName +""+this.lastName;
    },
    thiskey: function () {
        return this;
    }
}
//JavaScript Class Syntax

 class ClassName {
    constructor(name,year)
    {
        this.name = name;
        this.year = year;
    }
     viet( a,b)// any any => return any 
    {
        return a + b;
    }

 } */
/*   // Class Inheritance 
        // a class create with a class inheritance in herits all the methods from other class:
class Car{
    // constructor use initial properties
    
    constructor(carname)
    {
        this.carname = carname;
    }
    present()
    {
        return 'I have a ' +this.carname;
    }
}
class Model extends Car {
    constructor(carname,mode)
    {
        super(carname);// use super => call the parent's contructor and gets access to the propertis and method
        // truy carname vao
        this.mode = mode;
    }
    show()
    {
        console.log(this.present() +""+", quatity:"+this.mode);

    }
    get gbrand()
    {
        return this.carname;
    }
    set s_brand(a)
    {
        this.carname= a;
    
    }
    get getmode()
    {
        return this.mode;
    }
    set s_mode(a)
    {
        this.mode = a;
    
    }
    
}
const car = new Car("arguments");
const model1 = new Model("bnw",12);
    model1.show();
    console.log(model1.gbrand);
    console.log(model1.getmode); */

//    Function Sequence

/* //    JavaScript Callbacks1
//A callback is a function passed as an argument to another function.

const myNumbers = [3,4,5,67,7,22,-3];

// function is definced 
function removebycondition(numbers, condition) {
    const myArray = [];
    for (const x of numbers) {
        if(condition(x))
        {
            myArray.push(x);
        }
    }
    for (const x of myArray) {
        console.log(x);
    } 
}
const a = function (x) {
    if (x >=0) {
        return x;  
    }
    
   
}
function name1(a) {
    if(a >=0) return a;
} */
// removebycondition(myNumbers,(x) => x >= 0);
// console.log("anonmynon funtion")
// removebycondition(myNumbers,function (x) {
//     if (x >=0) {
//         return x;  
//     }
    
   
// });
// removebycondition(myNumbers,a);
// removebycondition(myNumbers,name1);

//