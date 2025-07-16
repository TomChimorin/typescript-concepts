# Type Inference

## Description

Type inference is a feature in TypeScript that allows the compiler to <span style="background-color:#ef4444; color:#f3f4f6; padding:4px 8px; border-radius:6px; font-weight:600;"> automatically</span> determine the type of a variable based on its value. 

In other words, if you declare a variable without explicitly specifying its type, TypeScript will try to infer the type based on the <span style="background-color:#ef4444; color:#f3f4f6; padding:4px 8px; border-radius:6px; font-weight:600;"> value you assign</span> to it.

## Literal Inference

When you initialize a variable with an object, TypeScript assumes that the properties of that object might change values later. For example, if you wrote code like this:

```ts
const obj = { counter: 0 };
if (someCondition) {
    obj.counter = 1;
}
```

For more details, visit the [official TypeScript documentation](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference).