# Type Narrowing

## Description

Type narrowing is the process of refining a variable's type within a conditional block of code.

This allows you to write more precise and type-safe code.

## Mechanisms

🟢 Type guards
Type guards are mechanisms that help TypeScript understand and narrow down the types more precisely.
One common type guard is the typeof operator.

🟢 instanceof operator
The instanceof operator is another type guard in TypeScript that allows you to check whether an object is an instance of a particular class or constructor function.

🟢 Intersection types
Intersection types in TypeScript allow you to combine multiple types into a single type. The resulting type will have all the properties of each individual type. You create intersection types using the & operator.

## Type Narrowing

TypeScript follows possible paths of execution that our programs can take to analyze the most specific possible type of a value at a given position. It looks at these special checks (called *type guards*) and assignments, and the process of refining types to more specific types than declared is called narrowing.


For more details, visit the [official TypeScript documentation](https://www.typescriptlang.org/docs/handbook/2/narrowing.html).