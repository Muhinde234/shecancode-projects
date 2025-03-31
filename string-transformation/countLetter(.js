// a function that counts the number of times a specific letter appears in a string.
const countLetter = (str, letter) => 
    typeof str !== 'string' || typeof letter !== 'string' || letter.length !== 1 ? 0 :
    (str.toLowerCase().match(new RegExp(letter.toLowerCase(), 'g'))?.length || 0);

// Test cases
[
    { str: 'Hello World', letter: 'l', expected: 3 },
    { str: 'JavaScript', letter: 'a', expected: 2 },
    { str: 'Mississippi', letter: 's', expected: 4 },
    { str: 'ABCabc', letter: 'A', expected: 2 },
    { str: 'No match', letter: 'z', expected: 0 },
    { str: '', letter: 'a', expected: 0 },
    { str: 12345, letter: '1', expected: 0 },
    { str: 'Test', letter: 'test', expected: 0 }
].forEach(({str, letter, expected}) => {
    const result = countLetter(str, letter);
    console.log(`countLetter("${str}", "${letter}") → ${result} (${result === expected ? '✓' : '✗'})`);
});