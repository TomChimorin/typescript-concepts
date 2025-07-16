// Regular Function
function addOne(num:number) {
    return num + 1
}

const res = addOne(3);
console.log(res);

// Arrow Function
const double = (x: number, y: number) => x * y
const res1 = double(2, 10)
console.log(res1);