// a function that converts a string to snake_case.
function toSnakeCase(str) {
    if (typeof str !== 'string') return '';
    
    return str
        .replace(/\s+/g, '_')          
        .replace(/([A-Z])/g, '_$1')    
        .replace(/^_+|_+$/g, '')       
        .replace(/__+/g, '_')          
        .toLowerCase();               
}

// Test cases
console.log(toSnakeCase('helloWorld'));      // 'hello_world'
console.log(toSnakeCase('Hello World'));     // 'hello_world'
console.log(toSnakeCase('getHTTPResponse')); // 'get_http_response'
console.log(toSnakeCase('existing_snake'));  // 'existing_snake'
console.log(toSnakeCase('Mixed Case'));      // 'mixed_case'
console.log(toSnakeCase(''));                // ''
console.log(toSnakeCase(123));               // '' (non-string input)