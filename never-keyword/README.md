# Never

## Description

The never keyword is used to indicate that a function will <span style="background-color:#ef4444; color:#f3f4f6; padding:4px 8px; border-radius:6px; font-weight:600;"> not return anything,</span> or that a variable can never have a value. The never type is useful for indicating that certain code paths should never be reached, or that certain values are impossible. It can help catch errors at compile-time instead of runtime.

## Use Cases
🟢 A function that always throws an error
```ts
function throwError(msg: string): never {
    throw new Error(msg);
}
```

🟢 A function that has an infinite loop
```ts
function infiniteLoop(): never {
    while (true) {}
}
```

🟢 A variable that can never have a value
```ts
let x: never;

function neverReturns(): never {
    while (true) {}
}

x = neverReturns();
```


## The `never` type

When narrowing, you can reduce the options of a union to a point where you have removed all possibilities and have nothing left. In those cases, TypeScript will use a never type to represent a state which shouldn’t exist.

### Exhaustiveness checking

The `never` type is assignable to every type; however, no type is assignable to `never` (except `never` itself). This means you can use narrowing and rely on `never` turning up to do exhaustive checking in a `switch` statement.

For example, adding a `default` to our `getArea` function which tries to assign the shape to `never` will not raise an error when every possible case has been handled.

```ts
type Shape = Circle | Square;
 
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
```


For more details, visit the [official TypeScript documentation](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions).

