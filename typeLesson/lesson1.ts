let num: number = 10;
let s: string = "Hello";
let b: boolean = true;
let arr: number[] = [1, 2, 3];
let strings: string[] = ["Hello", "World"];
let boolArray: boolean[] = [true, false];
let nullValue: null = null;
let numValue2: undefined = undefined;
console.log(num, s, b, arr, strings, boolArray, nullValue, numValue2);

//Tuple
type ColorCount = [string, number];
let redCount: ColorCount = ["red", 10];
// let invalidSizeCount: ColorCount = ['red', 1, 2]; // Error
console.log(redCount);


const isGreaterThan = (a: number, b: number): boolean => {
    return a > b;
}
console.log(isGreaterThan(10, 5));

// Variable function

// type OnComplete = (user: User) => void;

// const createUser = (id: string, OnComplete: OnComplete) => {
//     const newUser = { id, };
//     OnComplete(newUser);
// }

// Rest Parameters
const sum = (...numbers: number[]): number => {
    return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4, 5));


// Optional Parameters
const printName = (name: string, age?: number): void => {
    console.log(name, age);
}

printName('John');

const someFn = ({a,...rest}: {a: number, b: number, c: number}) => {
    console.log(a, rest);
}

someFn({a: 1, b: 2, c: 3});