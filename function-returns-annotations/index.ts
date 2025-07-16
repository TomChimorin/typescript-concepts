// Regular Function
function double1(x:number): number {
    return x * x
}

const res3 = double1(2);
console.log(res3);

// Arrow Function
const double2 = (x: number): number => x * x;
console.log(double2(2));