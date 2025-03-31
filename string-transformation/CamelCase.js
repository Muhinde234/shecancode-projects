//  a function that converts a string to camelCase.
const toCamelCase = str => 
    typeof str !== 'string' ? '' :
    str.trim()
      .replace(/[^\w\s]/g, '')  
      .replace(/(?:\s|_)(\w)/g, (_, c) => c.toUpperCase()) 
      .replace(/^[A-Z]/, c => c.toLowerCase()); 

// Test cases
[
    'hello_world',    // helloWorld
    'Hello-world',    // helloWorld
    'hello world',    // helloWorld
    'Hello World',    // helloWorld
    'helloWorld',     // helloWorld (unchanged)
    'get-http-code',  // getHttpCode
    '',               // '' (empty)
    123,              // '' (non-string)
].forEach(test => console.log(`${test} → ${toCamelCase(test)}`));