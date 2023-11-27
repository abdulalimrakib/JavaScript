// reduce

const myNum = [1, 2, 3, 4, 5];

const myTotal = myNum.reduce((acc, curvalue) => {
  console.log(`acc: ${acc} & cur: ${curvalue}`);

  return acc + curvalue;
});

console.log(myTotal);