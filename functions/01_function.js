function sayMyName() {
  console.log("A");
  console.log("b");
  console.log("d");
  console.log("u");
  console.log("l");
  console.log(" ");
  console.log("A");
  console.log("l");
  console.log("i");
  console.log("m");
}
// sayMyName();



// function addTwoNumber(number1, number2) {
//   console.log(number1 + number2);
// }
// console.log(addTwoNumber(2, 4));



function addTwoNumber(number1, number2) {
  return number1 + number2;
}
// console.log(addTwoNumber(2, "a"));



function backLit(variable = "You don't pass any arguments") {
  return `${variable} => this is returnd`;
}
// console.log(backLit());
// console.log(backLit("Abdul Alim"));



// function calculateCartPrice(num1){
//   return num1;
// }
// console.log(calculateCartPrice(200));


// function calculateCartPrice(...num1){
//   return num1;
// }
// console.log(calculateCartPrice(200, 300,400));


function calculateCartPrice(val1,val2,...num1){
  return num1;
}
// console.log(calculateCartPrice(200, 300,400));


const user = {
  userName : "Abdul Alim RAkib",
  age : 22
}

function handelObject(anyObject){ 
  console.log(`The age of ${anyObject.userName} is ${anyObject.age}`)
}
// handelObject(user)
// handelObject({
//   userName:"Sumaya Shimu Rima",
//   age: 23
// })
handelObject({
  userName: "Kulsuma aktar suma",
  age:28
})


const myArray = [200, 300, 400];

function returnSecondValue(getArry){
  return getArry[1];
}
// console.log(returnSecondValue(myArray));

