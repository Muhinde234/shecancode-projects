// function to check palindrome
function isPalindrome(str) {
    // Validate input
    if (typeof str !== 'string') return false;
    
    // Clean the string: remove non-alphanumeric and convert to lowercase
    const cleanStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    // Handle empty string case
    if (cleanStr.length === 0) return false;
    
    // Compare with reversed string
    return cleanStr === reverse(cleanStr);
}

//Reverses a string

function reverse(str) {
    return str.split('').reverse().join('');
}

// ==================== TEST CASES ====================

// Positive cases (palindromes)
console.log('=== PALINDROME TEST CASES ===');
console.log("madam:", isPalindrome("madam"));                      // true
console.log("racecar:", isPalindrome("racecar"));                  // true
console.log("A man, a plan, a canal: Panama:", 
    isPalindrome("A man, a plan, a canal: Panama"));               // true
console.log("12321:", isPalindrome("12321"));                      // true
console.log("No 'x' in Nixon:", isPalindrome("No 'x' in Nixon"));  // true
console.log("Was it a car or a cat I saw?:", 
    isPalindrome("Was it a car or a cat I saw?"));                 // true

// Negative cases (non-palindromes)
console.log('\n=== NON-PALINDROME TEST CASES ===');
console.log("hello:", isPalindrome("hello"));                      // false
console.log("world:", isPalindrome("world"));                      // false
console.log("123abc:", isPalindrome("123abc"));                    // false
console.log("palindrome:", isPalindrome("palindrome"));            // false

// Edge cases
console.log('\n=== EDGE CASES ===');
console.log("Empty string:", isPalindrome(""));                    // false
console.log("Single character:", isPalindrome("a"));               // true
console.log("Only punctuation:", isPalindrome(".,!?"));            // false
console.log("Number input:", isPalindrome(12321));                 // false
console.log("Null input:", isPalindrome(null));                    // false