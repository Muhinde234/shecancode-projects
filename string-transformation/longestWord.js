// a function that finds the longest word in a given string

const longestWord = str =>
    typeof str !== 'string' ? '' :
    str.split(/\s+/)
       .reduce((longest, word) => 
           word.length > longest.length ? word : longest, '');

// Test cases
[
    'The quick brown fox',        // 'quick'
    'Jumped over the lazy dog',   // 'Jumped'
    'Hello world',                // 'Hello'
    'One',                        // 'One'
    '',                           // ''
    'Multiple    spaces',         // 'Multiple'
    12345,                        // '' (non-string)
].forEach(test => console.log(`"${test}" → "${longestWord(test)}"`));