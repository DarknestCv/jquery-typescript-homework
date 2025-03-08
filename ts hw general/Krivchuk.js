"use strict";
// 1
const f = (a, b) => {
    return a - b;
};
f(5, 2);
// 2
const r = (a, b) => {
    if (typeof a === "undefined" && typeof b === "undefined") {
        console.error('error');
    }
    else if (typeof a === "undefined" && typeof b !== 'undefined') {
        return console.log(b * b);
    }
    else if (typeof b === "undefined" && typeof a !== "undefined") {
        return console.log(a * a);
    }
    else if (typeof b !== "undefined" && typeof a !== "undefined") {
        return console.log(a * b);
    }
};
r();
// 3
const conve = (arr) => {
    return arr.map((str) => parseFloat(str));
};
console.log(conve(["5", "20", "12"]));
// 4
const showUserInfo = ({ name, age, pet }) => {
    console.log(`Name: ${name}, Age: ${age}, Pet: ${pet}`);
};
showUserInfo({ name: "Alice", age: 28, pet: "Dog" });
// 5
function fuik(arr) {
    return new Set(arr);
}
const bob = ['banana', "monkey", 12, 'konyx', 32, 43, true, 46, undefined, null];
console.log(fuik(bob));
