const trim = (str) => str.trim();
const toLowerCase = (str) => str.toLowerCase();
const addAtSign = (str) => "@" + str;

let username = addAtSign(toLowerCase(trim(" DOSTA ")));

console.log(username);
