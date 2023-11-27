// Map

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum = myNum.map( (num) => {
    return num+10;
})

console.log(newNum);

const newNum2 = myNum.map( (num) => {
    return num+10;
}).map( (value) => {
    return value+1;
}).filter( (value) => {
    return value>20;
})

console.log(newNum2);