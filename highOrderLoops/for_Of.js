//fro of loop for array

const arr = [1,2,3,4,5]

for (const value of arr) {
    console.log(value);
}

const greeting = "hello world"

for (const value of greeting) {
    console.log(value);
}


//maps

const map = new Map()
map.set('ban', 'Bangladesh')
map.set('in', 'India')
map.set('pak', 'Pakistan')

for (const [key, value] of map) {
    console.log(key,":-",value);
}

