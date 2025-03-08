function fuik<T>(arr: T[]): Set<T> {
    return new Set(arr)
}


const bob = ['banana', "monkey", 12, 'konyx', 32, 43,true,46, undefined, null]
console.log(fuik(bob))

