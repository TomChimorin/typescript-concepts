# Unions

## Description

Unions are used to declare a type that can have one of several possible types.

Unions are useful when we want to allow a variable or parameter to accept <span style="background-color:#ef4444; color:#f3f4f6; padding:4px 8px; border-radius:6px; font-weight:600;"> multiple types.</span> 

The syntax for defining a union type in TypeScript uses the pipe symbol (|).


## Union Types

TypeScript’s type system allows you to build new types out of existing ones using a large variety of operators. Now that we know how to write a few types, it’s time to start *combining* them in interesting ways.

Defining a Union Type
The first way to combine types you might see is a *union* type. A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s *members*.

Let’s write a function that can operate on strings or numbers:

```ts
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
printId({ myID: 22342 });
Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.
```

For more details, visit the [official TypeScript documentation](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types).