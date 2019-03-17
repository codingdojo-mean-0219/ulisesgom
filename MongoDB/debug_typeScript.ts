var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
//we set the var to be type of string, a number would throw an error
myString = "9";

function sayHello(name: string){
    return `Hello, ${name}!`;
 }
 // This is working great:
 console.log(sayHello("Kermit"));
 // Why isn't this working? I want it to return "Hello, 9!"
 //same as before required it to be a string, so must pass in a string; or change it to
 //require it to type of any
 console.log(sayHello("9"));

 function fullName(firstName: string, lastName: string, middleName?: string){
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
 }
 // This works:
 console.log(fullName("Mary", "Moore", "Tyler"));
 // What do I do if someone doesn't have a middle name?
 //in variable name add a question mark at end of name to make it optional
 console.log(fullName("Jimbo", "Jones"));

 interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
 function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
 }
 const jay = {
    firstName: "Jay",
     lastName: "Patel",
    //need to be the same names, belts prop was belt
    belts: 4
 }
 // This seems to work fine:
 console.log(graduate(christine));
 // This one has problems:
 console.log(graduate(jay));

 class Ninja {
    fullName: string;
    constructor(
       public firstName: string,
       public lastName: string){
          this.fullName = `${firstName} ${lastName}`;
       }
    debug(){
       console.log("Console.log() is my friend.")
    }
 }
 // This is not making an instance of Ninja, for some reason:
 //had to use new keyword since we used "class" and had to pass in a first and last name for constructor
 const shane = new Ninja("james", "bond");
 // Since I'm having trouble making an instance of Ninja, I decided to do this:
 const turing = {
    fullName: "Alan Turing",
    firstName: "Alan",
    lastName: "Turing"
 }
 // Now I'll make a study function, which is a lot like our graduate function from above:
 function study(programmer: object){
    return `Ready to whiteboard an algorithm, ${programmer['fullName']}?`
 }
 // Now this has problems:
 //Ninja is a constructor and can't be used. switched it to regular object and changed from dot notation to brackets
 console.log(study(turing));
 var increment = x => x + 1;
// This works great:
console.log(increment(3));

//curly braces are for multi line arrow returns
var square = x =>  x * x ;
// This is not showing me what I want:
console.log(square(4));

// This is not working:
//parantheses are required if more than one paramater
var multiply = (x, y) => x * y;

// Nor is this working:
//curly braces required for multi line arrow functions
var math = (x, y) => {
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x - y);
    return [sum, product, difference];
}
class Elephant {
    constructor(public age: number) {   
    }
   //this was pointing to the window and not the calling obj
    birthday = add => {
    //    console.log(this)
      this.age++;
   }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
   console.log(`Babar's age is ${babar.age}.`)
   }, 2000)
// Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
