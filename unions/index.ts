let password : string | number = 20
password = "Zhao";

type UserInfo1 = {
    first: string;
    last: string;
    age: number
}

type AccountDetails1 = {
    email: string;
    password: string;
}

let user2: UserInfo1 | AccountDetails1 = {
    first: "John",
    last: "Doe", 
    age: 20.
}


let user3: UserInfo1 | AccountDetails1 = {
    email: 'someone@gmail.com',
    password: 'password123'
}

const items2: (number | string)[] = [1, 2, 5, 4, 'hello'];
console.log(items2);
