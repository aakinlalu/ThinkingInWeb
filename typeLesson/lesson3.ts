const genericFunction = <T>(value: T): T => {
    return value;
    }

const value = genericFunction<string>('Hello World');
console.log(value);
const value2 = genericFunction<number>(123);
console.log(value2);


// Record

const someOb: Record<string, number> = {
    a: 1,
    b: 2,
    c: 3,
};

console.log(someOb);


// Array<T>, Map<K, V>, Set<T>, ReturnType<T>, Nullable<T>, Parameters<T>


//Class
class User {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHello(): void {
        console.log(`Hello, ${this.name}`);
    }

};