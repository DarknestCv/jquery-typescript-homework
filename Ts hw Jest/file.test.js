function doubleEverySecondElement(arr) {
    return arr.map((num, index) => (index % 2 !== 0 ? num * 2 : num));
}

describe('doubleEverySecondElement', () => {
    for (let i = 0; i < 5; i++) {
        test(`should double every second element for random array ${i + 1}`, () => {
            const randomArray = Array.from({ length: Math.floor(Math.random() * 10) + 1 }, () => Math.floor(Math.random() * 100));
            const expectedArray = randomArray.map((num, index) => (index % 2 !== 0 ? num * 2 : num));
            expect(doubleEverySecondElement(randomArray)).toEqual(expectedArray);
        });
    }
});