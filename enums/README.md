# Enums

## Description

Enum is a way to define a set of <span style="background-color:#ef4444; color:#f3f4f6; padding:4px 8px; border-radius:6px; font-weight:600;"> named constants.</span> 

Enums allow you to define a collection of related values that can be used interchangeably in your code.


## Enums

Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.

Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

## Numeric enums

We’ll first start off with numeric enums, which are probably more familiar if you’re coming from other languages. An enum can be defined using the `enum` keyword.

```ts
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
```

For more details, visit the [official TypeScript documentation](https://www.typescriptlang.org/docs/handbook/enums.html).