const Numbers = [1, 2, ,5,7,8,9,10,6,3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// a. a function that doubles every number in an array.
function double(arr) {
    return arr.map(num => num * 2);
}

// b.  a function that filters out even numbers from an array.
function filterEven(arr) {
    return arr.filter(num => num % 2 == 0);
}

// c. a function that calculates the sum of all numbers in an array.
function sum(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

// d. a function that calculates the average of all numbers in an array
function average(arr) {
    if (arr.length === 0) return 0;
    return sum(arr) / arr.length;
}

// e. a function that returns the largest number in an array.
function findMax(arr) {
    if (!arr || arr.length === 0) return undefined;
    return Math.max(...arr.filter(num => typeof num === 'number'));
}
// f. a function that returns the smallest number in an array
function findMin(arr) {
    if (!arr || arr.length === 0) return undefined;
    return Math.min(...arr.filter(num => typeof num === 'number'));
}

// g.a function that removes duplicate values from an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// h.a function that returns the index of a given value in an array (or -1 if not found).
function findIndex(arr, value) {
    return arr.indexOf(value);
}

console.log(`
=== Array Transformation Results ===
Original array: [${Numbers.join(', ')}]
-----------------------------------
1. Double each number: [${double(Numbers).join(', ')}]
2. Filter even numbers: [${filterEven(Numbers).join(', ')}]
3. Sum of all numbers: ${sum(Numbers)}
4. Average of numbers: ${average(Numbers).toFixed(2)}
5. Maximum value: ${findMax(Numbers)}
6. Minimum value: ${findMin(Numbers)}
7. Remove duplicates: [${removeDuplicates(Numbers).join(', ')}]
8. Index of '3': ${findIndex(Numbers, 3)}
9. Index of '7': ${findIndex(Numbers, 21)}
===================================
`);