export {};

let a: object;
a = function() {

}

let b: {name: string};
b = {name: 'abc'};

let c: {
    name: string,
    age: number
};

c = {
    name: 'abc',
    age: 100
};

let d: {
    name: string,
    age?: number
};

d = {
    name: 'abc'
}

let e: {
    name: string,
    [propName: string]: any
};

e = {
    name: 'abc',
    sex: 1,
    age: 100
}

let f:(a: number, b:number) => number;
f = (a: number, b: number) => {
    return a + b;
}

let arr: string[];
arr = ['a', 'b'];

let arr2: Array<number>;
arr2 = [1, 2];
