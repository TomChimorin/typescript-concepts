# Literal Types

## Description

Literal types allow you to specify a value that can only be <span style="background-color:#ef4444; color:#f3f4f6; padding:4px 8px; border-radius:6px; font-weight:600;"> one specific literal value.</span> 

This means that a variable with a literal type can only have one specific value and no other.


## Literal Types

A literal is a more concrete sub-type of a collective type. What this means is that `"Hello World"` is a `string`, but a `string` is not `"Hello World"` inside the type system.

There are three sets of literal types available in TypeScript today: strings, numbers, and booleans; by using literal types you can allow an exact value which a string, number, or boolean must have.

## Literal Narrowing

When you declare a variable via `var` or `let`, you are telling the compiler that there is the chance that this variable will change its contents. In contrast, using const to declare a variable will inform TypeScript that this object will never change.

```ts
// We're making a guarantee that this variable
// helloWorld will never change, by using const.
 
// So, TypeScript sets the type to be "Hello World", not string
const helloWorld = "Hello World";
 
// On the other hand, a let can change, and so the compiler declares it a string
let hiWorld = "Hi World";
```

For more details, visit the [official TypeScript documentation](https://www.typescriptlang.org/docs/handbook/literal-types.html).