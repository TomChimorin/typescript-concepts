# Objects
## Description

An object in TypeScript is a structured data type that represents a collection of properties, each with a key and an associated value. 

The properties of an object can have <span style="background-color:#ef4444; color:#f3f4f6; padding:4px 8px; border-radius:6px; font-weight:600;"> specific types,</span> and the object itself can be annotated with a type, often defined using an interface or a type alias. 

TypeScript uses structural typing, meaning that the shape of an object (its structure or properties) is what matters for type compatibility.

## Object Syntax
`type varName (annotations/types) = {property: value}`
```ts
const person: { firstName: string; lastName: string; age: number } = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};
```


## Object Types

In JavaScript, the fundamental way that we group and pass around data is through objects. In TypeScript, we represent those through object types.

As we’ve seen, they can be anonymous:

```ts
function greet(person: { name: string; age: number }) {
  return "Hello " + person.name;
}
```

or they can be named by using either an interface:

```ts
interface Person {
  name: string;
  age: number;
}
 
function greet(person: Person) {
  return "Hello " + person.name;
}
```

or a type alias:

```ts
type Person = {
  name: string;
  age: number;
};
 
function greet(person: Person) {
  return "Hello " + person.name;
}
```

In all three examples above, we’ve written functions that take objects that contain the property `name` (which must be a `string`) and `age` (which must be a `number`).

For more details, visit the [official TypeScript documentation](https://www.typescriptlang.org/docs/handbook/2/objects.html#generic-object-types).