# Function Return Annotations

## Function Types

### Typing the function

Let's add types to our simple examples from earlier:

```ts
function add(x: number, y: number): number {
  return x + y;
}
 
let myAdd = function (x: number, y: number): number {
  return x + y;
};
```

We can add types to each of the parameters and then to the function itself to add a return type. TypeScript can figure the return type out by looking at the return statements, so we can also optionally leave this off in many cases.

For more details, visit the [official TypeScript documentation](https://www.typescriptlang.org/docs/handbook/functions.html#optional-and-default-parameters).

