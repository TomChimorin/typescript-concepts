# Interface 

## Description

Interface is a way to define a <span style="background-color:#ef4444; color:#f3f4f6; padding:4px 8px; border-radius:6px; font-weight:600;"> contract</span> for the shape of an object. It specifies the properties and their types that an object must have. 

Interfaces are a powerful tool for enforcing a certain structure in your code.

While interfaces are commonly used to define the structure of objects, they are not limited to just objects.

Interfaces in TypeScript can also be used to <span style="background-color:#ef4444; color:#f3f4f6; padding:4px 8px; border-radius:6px; font-weight:600;"> describe the shape</span> of functions and classes.

## Declaration merging

Once an interface is declared, it cannot be directly modified. However, TypeScript allows what is informally referred to as "declaration merging" or "interface extension", which is often misconstrued as "re-opening".

Declaration merging in TypeScript refers to the ability to extend or augment an existing declaration, including interfaces. This can be useful when you want to add new properties or methods to an existing interface without modifying the original declaration.

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

For more details, visit the [official TypeScript documentation](https://www.typescriptlang.org/docs/handbook/2/objects.html).