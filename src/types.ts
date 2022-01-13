let a: 10;
let b: 'male' | 'female';
b = 'male';
b = 'female';

let c: string | number;
c = 'abc';
c = 10;

let d: any;
d = 'abc';
d = 10;
d = false;

let e: unknown;
e = 'abc';

let f: string = 'def';
f = e as string;
f = <string>e;

if (typeof e === 'string') {
    f = e;
}

function fn(): void {

}

function fn2(): never {
    throw new Error();
}