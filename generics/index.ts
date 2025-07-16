function printNumber(item:number, defaultValue: number): [number, number] {
    return [item, defaultValue];
}

function printString(item: string, defaultValue: string): [string, string] {
    return [item, defaultValue];
}

function printBoolean(item: boolean, defaultValue: boolean): [boolean, boolean] {
    return [item, defaultValue];
}
 
const num = printNumber(12, 20);
const str1 = printString("hello", "world");
const bool = printBoolean(true, false);
console.log(num);
console.log(str);
console.log(bool);

//--------------------
function uniqueDataTypesFunc<Type>(item1: Type, defaultValue1: Type): [Type, Type] {
    return [item1, defaultValue1];
}

const num2 = uniqueDataTypesFunc<number>(10, 20);
const str2 = uniqueDataTypesFunc<string>("hello", "world");
const bool2 = uniqueDataTypesFunc<boolean>(true, false);
console.log(num2);
console.log(str2);
console.log(bool2);

function reversePair<T, U>(value1: T, value2: U): [U, T] {
    return [value2, value1]
}

const reversedPair = reversePair('hello', 20)
console.log(reversedPair);

class Box<T> {
    private content: T;

    constructor(initialContent: T) {
        this.content = initialContent
    }

    getContent() : T {
        return this.content
    }

    setContent(newContent: T) : void {
        this.content = newContent;
    }
}

const stringBox = new Box<string>("Hello, TypeScript")
console.log(stringBox.getContent());
stringBox.setContent("New Content Added");;
console.log(stringBox.getContent());