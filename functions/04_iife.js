// Immediately Invoked Function Expressions (IIFE)


//()();   // ( 'function defination' )( 'function calling' )


(function(){
    console.log(`This is IIFE function DON'T FORGATE TO USE SEMICOLON AFTER THE CALLING PARENTHESES`)
})(); // semicolon is most important in this IIFE function

((authiorName) => {
    console.log(`Author is ${authiorName}`)
})("Abdul ALim"); // don't forget to use semicolon ;;;; 