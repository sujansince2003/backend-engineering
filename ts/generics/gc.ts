function merge<U, V>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    }
}

const merged = merge({
    name: 'Alice',

}, {
    age: 32
})
// this one works fine but user may also pass
const merged2 = merge({
    name: 'Alice',

},
    32 //here parameter need to be object but its just string type .ts wont give error but its implemention will be wrong
)
console.log(merged)
console.log(merged2)

// solution


// function mergeWithConstraint<U extends object, V extends object>(obj1: U, obj2: V) {


// interface generics

interface Person<A, B, C> {
    name: A,
    age: B,
    salary: C
}

const sujan: Person<string, number, number> = {
    name: 'sujan',
    age: 32,
    salary: 2000
}

console.log(sujan)
