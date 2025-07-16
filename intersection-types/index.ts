type UserInfo = {
    first: string;
    last: string;
    age: number;
}

type AccountDetails = {
    email: string;
    password: string;
}

type User3 = UserInfo & AccountDetails

const chimorin: User3 = {
    first: "Chimorin",
    last: "Zhao",
    age: 20,
    email: "zhaoyu0528@gmail.com",
    password: "password123",
};

console.log(`Name: ${chimorin.first} ${chimorin.last} Age: ${chimorin.age} Email: ${chimorin.email} Password: ${chimorin.password}`);

