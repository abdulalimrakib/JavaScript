// console.log(this)

// function functionName() {
//   console.log(this);
// }
// functionName();

// function functionName() {
//   userName = "ABdul Alim";
//   console.log(this.userName);
// }
// functionName()

// user = {
//     name: "abdul alim",
//     age: 23,

//     massage: function () {
//         console.log(`${this.name} , wellcome`)
//     }
// }
// user.massage()

// const print = (num1, num2) => {
//   console.log("this is arrow function");
//   return num1 + num2;
// };

// const print = (num1, num2) => (num1 + num2)

// const print = (num1, num2) => num1 + num2

const print = (num1, num2) => ({username:"abdul alim"})
console.log(print(3,4));
