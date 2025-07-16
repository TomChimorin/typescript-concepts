# Object Oriented Programming

## Class Properties Annotations

You can annotate class properties with a type. This allows you to define the data type of the property and ensure that it is always consistent.

## Access Modifiers

In TypeScript, you can use access modifiers to control the visibility of class members (properties and methods). Access modifiers determine the ways in which class members can be accessed from within and outside the class.

## Types
🟢 Public
Public: Members marked as public can be accessed from anywhere, both inside and outside the class.

🟢 Private
Private: Members marked as private can only be accessed from within the class they are defined in.

🟢 Protected
Protected: Members marked as protected can be accessed from within the class they are defined in, as well as any subclasses that extend the class.

## Getters & Setters

Getters and setters are used to access and modify class properties. Getters and setters allow you to define a property in a class that looks like a simple variable from the outside but internally has additional logic for getting and setting the value.

## Classes

Traditional JavaScript uses functions and prototype-based inheritance to build up reusable components, but this may feel a bit awkward to programmers more comfortable with an object-oriented approach, where classes inherit functionality and objects are built from these classes. Starting with ECMAScript 2015, also known as ECMAScript 6, JavaScript programmers can build their applications using this object-oriented class-based approach. In TypeScript, we allow developers to use these techniques now, and compile them down to JavaScript that works across all major browsers and platforms, without having to wait for the next version of JavaScript.

Let’s take a look at a simple class-based example:

```ts
class Greeter {
  greeting: string;
 
  constructor(message: string) {
    this.greeting = message;
  }
 
  greet() {
    return "Hello, " + this.greeting;
  }
}
 
let greeter = new Greeter("world");
```

For more details, visit the [official TypeScript documentation](https://www.typescriptlang.org/docs/handbook/classes.html).