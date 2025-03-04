const conve = (arr: string[]): number[] =>{
    return arr.map((str: string): number =>parseFloat(str))
}

console.log(conve(["5", "20", "12"]));
