# Tuples

## Description

Tuple is a type that represents an array with a <span style="background-color:#ef4444; color:#f3f4f6; padding:4px 8px; border-radius:6px; font-weight:600;"> fixed number of elements,</span> where each element can have a different type.

The order of the types in the tuple definition corresponds to the order of the values in the actual array. 

TUples are similar to arrays, but they have a specific structure and can be used to model finite sequences with known lengths.


## Tuple Types

A *tuple type* is another sort of `Array` type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.

```ts
type StringNumberPair = [string, number];
```

For more details, visit the [official TypeScript documentation](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types).