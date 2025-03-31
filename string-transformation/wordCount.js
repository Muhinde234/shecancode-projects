//  a function that counts the number of words in a string

function wordCount(str) {
    
    if (typeof str !== 'string' || !str.trim()) return 0;
    
    return str.trim().split(/\s+/).length;
}

// ======================================
// Test Cases with Descriptive Output
// ======================================

// Normal cases
const normalCases = [
    { input: "Hello world", expected: 2 },
    { input: "JavaScript is awesome", expected: 3 },
    { input: "Count the words in this sentence", expected: 5 },
    { input: "One", expected: 1 }
];

console.log("Normal Cases:");
normalCases.forEach(({input, expected}) => {
    const result = wordCount(input);
    console.log(`"${input}" => ${result} (${result === expected ? "✅" : "❌"} Expected: ${expected})`);
});

// Edge cases
const edgeCases = [
    { input: "", expected: 0 },               // Empty string
    { input: "   ", expected: 0 },            // Only spaces
    { input: " Hello   world  ", expected: 2 }, // Multiple spaces
    { input: 12345, expected: 0 },            // Number input
    { input: null, expected: 0 },             // Null input
    { input: undefined, expected: 0 },        // Undefined input
    { input: "Hello-world", expected: 1 },    // Hyphenated word
    { input: "Hello\tworld", expected: 2 },   // Tab separator
    { input: "Hello\nworld", expected: 2 }    // Newline separator
];

console.log("\n⚠️ Edge Cases:");
edgeCases.forEach(({input, expected}) => {
    const result = wordCount(input);
    console.log(`${JSON.stringify(input)} => ${result} (${result === expected ? "✅" : "❌"} Expected: ${expected})`);
});