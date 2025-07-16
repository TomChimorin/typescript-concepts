# Array Types

## Description

Arrays are a type of object that can store multiple values of the <span style="background-color:#ef4444; color:#f3f4f6; padding:4px 8px; border-radius:6px; font-weight:600;"> same data</span> type. Arrays in TypeScript are typed, which means you can specify the type of values that an array can hold.

## 2 Types Of Arrays
🟢 Using the square bracket notation `[]` to indicate an array of a specific type
```ts
const numbers: number[] = [1, 2, 3, 4];
```

🟢 Using the generic `Array<type>` notation to indicate an array of a specific type
```ts
const names: Array<string> = ["Alice", "Bob", "Charlie"];
```


## Arrays

To specify the type of an array like `[1, 2, 3]`, you can use the syntax `number[]`; this syntax works for any type (e.g. `string[]` is an array of strings, and so on). You may also see this written as `Array<number>`, which means the same thing. We’ll learn more about the syntax `T<U>` when we cover generics. 


For more details, visit the [official TypeScript documentation](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays).

