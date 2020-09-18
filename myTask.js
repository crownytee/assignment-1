/*
function myname(last, first) {
   console.log ("name: ", last, first);
}
myname("Ramon", "olaitan");
*/
/*
function myName(last, first){
    console.log("name: " + last + " " + first);
}
myName("Ramon", "Olaitan");
*/
/*
function greetings() {
var hello = "Welcome!";
return hello;
}
console.log(greetings()); 
*/
/*
function numbers(a, b) {
    if (a > b){
        return "First number is greater than second number";
    } else if (b > a) {
        return "Second number is greater than first number";
     } else {
        return "The numbers are the same" 
     }
    }
console.log(numbers(2, 6));
*/
/*
function myVar(name, age) {
    return "The name of the user is " + name + ", and their age is " + age + ".";
}
console.log(myVar("Shehu", 23));
*/
/*
function myVar(name, number) {
    var a = "The name of the user is ";
    var b = ", and their age is ";
    return a + name + b + number + ".";  
}
console.log(myVar("Shehu", 23));
*/
/*
function myVar(Param) {
if (Param.length >= 5) {
return "The word is long";    
} 
if (Param.length < 5) {
return "The word is Short"; 
}
}
console.log(myVar("Mentorship"));
*/
 /*
function myVar(Param) {
    if (Param.length >= 5) {
    return "The word is long";    
    } 
    return "The word is Short"; 
     } 
  console.log(myVar("Mentorship"));
  */
 /*
  function myVar(param1, param2, param3) {
    var sum = param1 + param2 + param3;
    return sum;
  }
  console.log(myVar(2, 5, 3));
*/
var myArr = [2,3,4,5];
function multiplesOfTwo(arr, num) {
    return myArr * num;
}
console.log(multiplesOfTwo(myArr, 2));