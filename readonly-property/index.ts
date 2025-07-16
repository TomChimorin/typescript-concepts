type User2 = {
    name: string;
    age?: number;
    readonly location: string
}

const user1: User2 = {
    name: "Chimorin",
    location: "China"
}

console.log(`Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`);