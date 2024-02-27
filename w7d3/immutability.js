// Mutation vs Immutability

const author = { name: "Bob" };

author.name = "John";


const list = [1,2,3,4]


list.map(item => item + 1)
list.map(item => item + 1)
list.map(item => item + 1)
list.map(item => item + 1)
list.map(item => item + 1)
list.map(item => item + 1)
list.map(item => item + 1)
list.map(item => item + 1)
list.map(item => item + 1)
list.map(item => item + 1)

list.pop() // 4
list.pop() // 3
list.pop() // 2
list.pop() // 1


// X -> TRANSFORM -> Y
// X -> TRANSFORM -> Y
// X -> TRANSFORM -> Y
// X -> TRANSFORM -> Y
// X -> TRANSFORM -> Y