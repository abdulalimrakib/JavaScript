// for in loop for object

const myObject = {
js: 'JavaScript',
cpp: "C++",
rb: "Ruby",
}

for (const key in myObject) {
    if (myObject.hasOwnProperty.call(myObject, key)) {
        const element = myObject[key];
        console.log(element);
    }
}