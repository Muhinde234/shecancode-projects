// a. Function composition utility
const compose = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);

// Example 1: Reverse and capitalize a string
const reverse = (str) => str.split('').reverse().join('');
const capitalize = (str) => str.toUpperCase();
const reverseAndCapitalize = compose(capitalize, reverse);

console.log(reverseAndCapitalize("hello")); // "OLLEH"

// Example 2: Double all even numbers
const doubleEvenNumbers = (arr) => arr.map(n => (n % 2 === 0 ? n * 2 : n));
console.log(doubleEvenNumbers([1, 2, 3, 4])); 

// b. Transform students array
const transformStudents = (students) => 
    students.map(s => ({ ...s, status: s.grade > 50 ? "Pass" : "Fail" }));

console.log(transformStudents([{ name: "Alice", grade: 55 }, { name: "Bob", grade: 45 }])); 


// c. Sort array of objects by key
const sortByKey = (arr, key) => [...arr].sort((a, b) => a[key] - b[key]);

// d. Filter by category
const filterByCategory = (products, category) => products.filter(p => p.category === category);

// e. Simple caching function
const cacheFunction = (fn) => {
    const cache = {};
    return (arg) => cache[arg] ?? (cache[arg] = fn(arg));
};

// Example usage
const square = cacheFunction(n => n * n);
console.log(square(4)); // 16 (computed)
console.log(square(4)); // 16 (cached)
