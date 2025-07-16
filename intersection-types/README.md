# Intersection Types

## Description

An intersection type is a way to <span style="background-color:#ef4444; color:#f3f4f6; padding:4px 8px; border-radius:6px; font-weight:600;"> combine multiple types</span> into a single type that includes all the properties and methods of each constituent type. 

An intersection type is denoted by the & symbol.


## Intersection Types

`interface`s allowed us to build up new types from other types by extending them. TypeScript provides another construct called *intersection types* that is mainly used to combine existing object types.

An intersection type is defined using the `&` operator.

```ts
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}
 
type ColorfulCircle = Colorful & Circle;
```

For more details, visit the [official TypeScript documentation](https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types).