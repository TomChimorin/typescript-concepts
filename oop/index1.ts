class Human {
    private first: string;
    public last: string;
    protected age: number;

    constructor(first: string, last: string, age: number) {
        this.first = first;
        this.last = last;
        this.age = age;
    }

    getName(): string {
        return `${this.first} ${this.last} Age: ${this.age}`;;
    }
}

let p1 = new Human("John", "Doe", 20);

class Person1 extends Human {
    constructor(first: string, last: string, age: number) {
        super(first, last, age);
    }
}

const chim = new Person1('Chimorin', "Zhao", 20);
console.log(chim);

console.log(p1.last);
console.log(p1.getName());