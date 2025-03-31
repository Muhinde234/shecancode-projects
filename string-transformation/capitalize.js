// function that capitalizes the first letter of 
function capitalize(str) {
   
    if (typeof str !== 'string') return '';

    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Test cases
console.log("-- Testing capitalize() function --");
console.log(`1. Basic string:'hello' =>${capitalize('hello')}`);    // ireturns "Hello"
console.log(`2. multi-letter string:'igirimpuhwe' =>${capitalize('igirimpuhwe')}`);  // returns "Igirimpuhwe"
console.log(`3. Number input: 23 =>${capitalize(23)}`);         // returns: "" (number input)
console.log(`4. Null input:null =>${capitalize(null)}`);       // returns: "" 
console.log(`5. Undefined input:undefined =>${capitalize(undefined )}`);  // returns: ""
console.log(`6. Boolean input: true =>${capitalize(true)}`);       // returns: "" (boolean input)
console.log(`7. Object input:{} =>${capitalize({})}`);         // returns: "" (object input)
console.log(`8. Empty string: '' =>${capitalize('')}`);         // returns: "" (empty string)
console.log(`9. String starting with number:'1test' =>${capitalize(' 1test')}`);    // returns: "1test" (no change for numbers)





