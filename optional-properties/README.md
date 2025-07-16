# Optional Properties

## Description

You can make a certain property optional in an object type by adding a question mark (?) after the property name.

For example, let's say you have an object type for a person with name, age, and email properties, but you want to make the email property optional. You can do this by adding a question mark after the email property.

```ts
type Person = {
    name: string;
    age: number;
    email?: string;
}
```

Now, when you create an object of type Person, you can choose whether or not to include the email property.

```ts
const alice: Person = { name: "Alice", age: 30 };
const bob: Person = { name: "Bob", age: 25, email: "bob@example.com" };
```

In this example, the alice object does not include the email property, while the bob object does. Because the email property is marked as optional in the Person type definition, it is valid to create objects with or without it.


## Optional Properties

Not all properties of an interface may be required. Some exist under certain conditions or may not be there at all. These optional properties are popular when creating patterns like “option bags” where you pass an object to a function that only has a couple of properties filled in.

Here’s an example of this pattern:

```ts
interface SquareConfig {
  color?: string;
  width?: number;
}
 
function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
 
let mySquare = createSquare({ color: "black" });
```

For more details, visit the [official TypeScript documentation](https://www.typescriptlang.org/docs/handbook/interfaces.html#optional-properties).