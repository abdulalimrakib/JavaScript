let a = 100;
const b = 200;
var c = 300;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

//console.log(a);
//console.log(b);
//console.log(c);


function one() {
  // parent function
  const userName = "Abdul Alim";

  function two() {
    // child function
    const website = "github";
    console.log(userName); // can excess parant's variable
  }

  console.log(website); // can't excess child's variable 

  //two()
}
//one();


if(true){
    // parent scope
  const userName = "Abdul Alim";

   if(userName === "Abdul Alim") {
    // child scape
    const website = "github";
    //console.log(userName +" "+ website); // can excess parant's variable
  }

  //console.log(website); // can't excess child's variable 
}



//++++++++++++++++++++++ interesting (hoisting) +++++++++++++++++++

addOne(5) //it will be exicuite
function addOne(num){
    return num + 1
}
addOne(5)


addTwo(5) // it won't exicuite (error)
const addTwo = function (num){
    return num +2;
}
addTwo(5)