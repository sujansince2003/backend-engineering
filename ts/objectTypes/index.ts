let person: object


person = {
    name: "Alice",
}

console.log(typeof (person))



const person1: {
    name: string
    isStudent: boolean
} = {
    name: "Sujan",
    isStudent: true,
}

console.log(person1.name)


let person2: Object

person2 = {
    fname: "sujan"
}
console.log(typeof (person2))
console.log(person2.valueOf())


let sym = Symbol("sym")
console.log(sym)

const user = {
    name: "Sujan",
    [sym]: 123
};

console.log(user)


enum Role {
    admin,
    user,
    guest
}

console.log(typeof (Role))


let a: (number[] | string)
a = [1, 2, 3]
a = "sujan"
console.log(a)





type Name = string
let fname: Name = "sujan"
console.log(`the name is ${fname}`)