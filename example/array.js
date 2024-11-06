const a = [1, 2, 3]
console.log(a)
a.length = 2 //remove item at the end//
console.log(a)
a.length = 3
// add new items
a.push(4)
a.unshift(0)
console.log(a)
// remove items
a.pop()
a.shift()
console.log(a)

const list = ['a', 'b', 'c']
for (const value of list) {
    console.log(value) //value
}
//join 2 array
const c=[...a, ...list]
const d= a.concat(list)
console.log (c)
console.log(d)
//matrix
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for (const value of matrix) {
    console.log(value) //value
}

//find 
const array1 = [16, 3, 8, 19, 4];

const found = array1.find((element) => element > 10); //return first element true

console.log(found);

// findIndex

const array2 = [8, 3, 18, 19, 4];

const found2 = array2.findIndex((element) => element > 10); //return index of first element true

console.log(found2);
