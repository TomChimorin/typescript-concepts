type User1 = {
    name: string;
    age?: number;
    readonly location: string
}

const user: User1 = {
    name: "Chimorin",
    location: "China"
}

console.log(`Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`);