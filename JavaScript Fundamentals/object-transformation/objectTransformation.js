const person1 = { 
    firstName: "dositha", 
    lastName: "muhinde", 
    age: 25 
  };
  
  const person2 = { 
    firstName: "igirimpuhwe", 
    lastName: "dosta", 
    age: 17 
  };
const people = [person1, person2];

// a. Returns the full name of a person
function fullName(person) {
    return `${person.firstName} ${person.lastName}`;
}

// b. Checks if a person is 18 or older
function isAdult(person) {
    return person.age >= 18;
}

// c. Filters an array of people based on minimum age
function filterByAge(people, minAge) {
    return people.filter(person => person.age >= minAge);
}

// d. Adds a new property to an object
function addProperty(obj, key, value) {
    obj[key] = value;
}

// e. Checks if an object has a specific property
function hasProperty(obj, key) {
    return obj.hasOwnProperty(key);
}

// f. Counts the number of properties in an object
function countProperties(obj) {
    return Object.keys(obj).length;
}


console.log('Full name of person1:', fullName(person1)); 
console.log('Full name of person2:', fullName(person2)); 

console.log('Is person1 an adult?', isAdult(person1)); 
console.log('People aged 18+:', filterByAge(people, 18)); 

const obj = { name: "Alice" };
addProperty(obj, "age", 30);
console.log('Modified object:', obj);

console.log('Does object have "age"?', hasProperty(obj, "age")); 
console.log('Property count:', countProperties(obj));