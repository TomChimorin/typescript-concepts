# Type Aliases

## Description

A type alias is a way to create a new name for an existing type.

It allows you to define a <span style="background-color:#ef4444; color:#f3f4f6; padding:4px 8px; border-radius:6px; font-weight:600;"> custom type</span> that refers to another type and give it a more meaningful or descriptive name.

Type aliases are defined using the <span style="background-color:#ef4444; color:#f3f4f6; padding:4px 8px; border-radius:6px; font-weight:600;"> type keyword,</span> followed by the name of the alias, an equal sign (=), and the type it refers to.



## Type Aliases

We’ve been using object types and union types by writing them directly in type annotations. This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.

A type *alias* is exactly that - a ****name* for any *type*. The syntax for a type alias is:

```ts
type Point = {
  x: number;
  y: number;
};
 
// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });
```

For more details, visit the [official TypeScript documentation](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases).