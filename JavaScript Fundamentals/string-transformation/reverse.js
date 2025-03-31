// function that reverses a given string
function reverse(str) {
  
    if (typeof str !== 'string') {
        if (str === null || str === undefined) return '';
        str = String(str);  
    }
    return str.split('').reverse().join('');
}

// Test cases 
console.log("=== String Reversal Tests ===");
console.log(`1. Normal string: "igirimpuhwe" =>`, reverse("igirimpuhwe"));  // "ahtisod"
console.log(`2. Number input: 12345 =>`, reverse(12345));          // "54321"
console.log(`3. Boolean input: true =>`, reverse(true));          // "eurt"
console.log(`4. Null input: null =>`, reverse(null));             // ""
console.log(`5. Undefined input: undefined =>`, reverse(undefined)); // ""
console.log(`6. Mixed characters: "a1b2c3" =>`, reverse("a1b2c3")); // "3c2b1a"
console.log(`7. Single character: "a" =>`, reverse("a"));          // "a"
console.log(`8. Empty string: "" =>`, reverse(""));                // ""
console.log(`9. With spaces: "hello world" =>`, reverse("hello world")); // "dlrow olleh"
