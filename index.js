const array = [1, 2, 3, 4, 5];

// forEach()
console.log("forEach():");
array.forEach(element => {
    console.log(element);
});

// map()
console.log("\nmap():");
const mappedArray = array.map(element => element * 2);
console.log(mappedArray);

// filter()
console.log("\nfilter():");
const filteredArray = array.filter(element => element % 2 === 0);
console.log(filteredArray);

// every()
console.log("\nevery():", array.every(element => element > 0));

// some()
console.log("some():", array.some(element => element < 0));

// find()
console.log("\nfind():", array.find(element => element > 10));

// findIndex()
console.log("findIndex():", array.findIndex(element => element < 0));

// reduce()
console.log("\nreduce():", array.reduce((acc, curr) => acc + curr, 0));

// concat()
console.log("\nconcat():", array.concat([6, 7, 8]));

// slice()
console.log("\nslice():", array.slice(2, 5));

// reverse()
console.log("\nreverse():", array.reverse());

// sort()
console.log("\nsort():", array.sort((a, b) => a - b));

// splice()
console.log("\nsplice():", array.splice(0, 2, 'a', 'b'));

// pop()
console.log("\npop():", array.pop(), array);

// push()
array.push(6);
console.log("\npush():", array);

// unshift()
array.unshift(0);
console.log("\nunshift():", array);

// fill()
array.fill(0);
console.log("\nfill():", array);

// findLast()
console.log("\nfindLast():", array.findLast(element => element < 5));

// findLastIndex()
console.log("findLastIndex():", array.findLastIndex(element => element === 0));

// flatMap()
console.log("\nflatMap():", array.flatMap(element => [element, element]));

// entries()
console.log("\nentries():", Array.from(array.entries()));

// includes()
console.log("\nincludes(5):", array.includes(5));