let arr: [string, string];
arr = ['a', 'b'];

enum Gender {
    Male = 1,
    Female = 0
}

let obj: {
    name: string, 
    gender: Gender
};

obj = {
    name: 'abc',
    gender: Gender.Male
};

type myType = 1 | 2 | 3 | 4 | 5;
let a: myType;
let b: myType;

a = 1;
b = 2;
