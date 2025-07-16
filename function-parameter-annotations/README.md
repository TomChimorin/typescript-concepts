# Function Parameter Annotations

## Description

Function parameter annotations in TypeScript are used to specify the expected types of the parameters that a function takes.


## Function Type Expressions

The simplest way to describe a function is with a function type expression. These types are syntactically similar to arrow functions:

```ts
function greeter(fn: (a: string) => void) {
    fn("Hello, World");
}
function printToConsole(s: string) {
    console.log(s);
}

greeter(printToConsole);
```

For more details, visit the [official TypeScript documentation](https://www.typescriptlang.org/docs/handbook/2/functions.html#function-type-expressions).

