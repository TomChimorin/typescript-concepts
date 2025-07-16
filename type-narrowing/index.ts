// Type Guards
type MyType = string | number;

function exampleFunction(value: MyType): void {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}

exampleFunction("hello");

// Instance of Operator
class Dog {
    bark() : void {
        console.log("Woof Woof");
    }
}

class Cat {
    meow(): void {
        console.log("Meow");
    }
}

function animalSound(animal: Dog | Cat): void {
    if (animal instanceof Dog) {
        animal.bark();
    } else {
        animal.meow();
    }
}

const myDog = new Dog();
const myCat = new Cat()

animalSound(myDog) // Woof Woof
animalSound(myCat) // Meow

console.log(myDog)
console.log(myCat)

// Intersection Types
type Employee = {
    id: number;
    name: string
}

type Manager = {
    department: string;
    role: string;
}

type ManagerWithEmployeeInfo = Employee & Manager;

const manager: ManagerWithEmployeeInfo = {
    id: 123,
    name: "Alex Merson",
    department: "Engineering",
    role: "Team Lead",
};

console.log(manager.id);
console.log(manager.name);
console.log(manager.role);
console.log(manager.department);