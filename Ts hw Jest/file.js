
function doubleEverySecond(arr) {
    return arr.map((num, index) => (index % 2 !== 0 ? num * 2 : num));
}

module.exports = doubleEverySecond;