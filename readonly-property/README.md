# Readonly properties

Some properties should only be modifiable when an object is first created. You can specify this by putting readonly before the name of the property:

```ts
interface Point {
  readonly x: number;
  readonly y: number;
}
```

You can construct a Point by assigning an object literal. After the assignment, x and y can’t be changed.

```ts
let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!
Cannot assign to 'x' because it is a read-only property.
```

For more details, visit the [official TypeScript documentation](https://www.typescriptlang.org/docs/handbook/interfaces.html#readonly-properties).