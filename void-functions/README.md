# Void in TypeScript

## Description

Void is a type that represents the <span style="background-color:#ef4444; color:#f3f4f6; padding:4px 8px; border-radius:6px; font-weight:600;"> absence</span> of any value. It is often used as the return type for functions that do not return a value.

## Writing the function type

Now that we’ve typed the function, let’s write the full type of the function out by looking at each piece of the function type.

```ts
let myAdd: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
```

A function’s type has the same two parts: the type of the arguments and the return type. When writing out the whole function type, both parts are required. We write out the parameter types just like a parameter list, giving each parameter a name and a type. This name is just to help with readability. We could have instead written:

```ts
let myAdd: (baseValue: number, increment: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
```

As long as the parameter types line up, it’s considered a valid type for the function, regardless of the names you give the parameters in the function type.

The second part is the return type. We make it clear which is the return type by using an arrow (=>) between the parameters and the return type. As mentioned before, this is a required part of the function type, so if the function doesn’t return a value, you would use void instead of leaving it off.

For more details, visit the [official TypeScript documentation](https://www.typescriptlang.org/docs/handbook/functions.html#rest-parameters).

