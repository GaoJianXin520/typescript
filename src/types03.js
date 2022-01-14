var arr;
arr = ['a', 'b'];
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 1] = "Male";
    Gender[Gender["Female"] = 0] = "Female";
})(Gender || (Gender = {}));
var obj;
obj = {
    name: 'abc',
    gender: Gender.Male
};
var a;
var b;
a = 1;
b = 2;
