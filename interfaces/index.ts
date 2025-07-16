interface Computer {
    name: string;
    ram: number;
    hdd: number;
}

const computerExample: Computer = {
    name: 'i7',
    ram: 8,
    hdd: 100,
}

console.log(computerExample.name);
console.log(computerExample.ram);
console.log(computerExample.hdd);

interface Movie {
    readonly name: string;
    ratings: number;
    genre?: string
}

const movie1 : Movie = {
    name: "Star Wars",
    ratings: 8.9,
    genre: "Action",
};

console.log(movie1.name);

interface MathOperation {
    (x: number, y: number): number;
}

const add : MathOperation = (a, b) => a + b;
const subtract : MathOperation = (a, b) => a - b;
console.log(add(2, 2));
console.log(subtract(10, 20));

interface PersonDetails {
    firstName: string;
    lastName: string;
    age1: number;
    sayHello(): void
}

function greet(person:PersonDetails) {
    console.log(`Hello, ${person.firstName} ${person.lastName}`);
    person.sayHello();
}

const John: PersonDetails = {
    firstName: "John",
    lastName: "Doe",
    age1: 30,
    sayHello() {
        console.log("Hi There");
    },
};

const tom: PersonDetails = {
    firstName: "chim",
    lastName: "zhao",
    age1: 20,
    sayHello() {
        console.log("Wassup");
    },
};

greet(John);
greet(tom);

interface Song {
    songName: string;
    singerName: string;
    printSongInfo(songName: string, singerName: string): string
}

const song1 : Song = {
    songName: 'Natural',
    singerName: "Imagin Drigon",
    printSongInfo: (songName, singerName) => {
        return `Song: ${songName}, Singer: ${singerName}`;
    },
};

console.log(song1.printSongInfo("Natural", "Imagin Drigon"));

interface MovieDetails {
    readonly name: string;
    ratings: number;
    printMovieInfo(name: string, price: number, ratings: number): string | number;
}

interface MovieGenre extends MovieDetails {
    genre: string;
}

const movie2: MovieGenre = {
    name: 'Star Wars',
    genre: 'Action',
    ratings: 8.9,
    printMovieInfo(
        name: string,
        price: number,
        ratings: number
    ): string | number {
        return `Movie name: ${name} Price: ${price} Ratings: ${ratings}`;
    },
};

const res6 = movie2.printMovieInfo('John Wick', 100, 9)
console.log(res);

interface Vehicle {
    start(): void;
    stop(): void;
}

class Car implements Vehicle {
    start(): void {
        console.log('Car is starting...');
    }
    stop(): void {
        console.log('Car is stopped...');
    }
}

const myCar = new Car();
myCar.start();
myCar.stop();

// Declaration Merging

//Original Interface
interface Car {
    brand: string;
    start(): void;
}

// Declaration merging (interface extension)
interface Car {
    model: string;
    stop(): void;
}

const myCar1: Car = {
    brand: 'BMW',
    model: 'M3',
    start() {
        console.log("Start");
    },
    stop() {
        console.log("Stop");
    },
};

myCar.start();
myCar.stop();