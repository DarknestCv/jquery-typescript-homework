"use strict";
const f = (a, b) => {
    return a - b;
};
f(5, 2);
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
const conve = (arr) => {
    return arr.map((str) => parseFloat(str));
};
console.log(conve(["5", "20", "12"]));
