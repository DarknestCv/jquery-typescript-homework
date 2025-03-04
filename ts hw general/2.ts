const r = (a?:number | undefined, b?: number | undefined) =>{
   if(typeof a === "undefined" && typeof b === "undefined"){
    console.error('error')
   }else if(typeof a === "undefined" && typeof b !== 'undefined'){
    return console.log(b*b)
   }else if(typeof b === "undefined" && typeof a !== "undefined"){
    return console.log(a * a)
   }else if(typeof b !== "undefined" && typeof a !== "undefined"){
    return console.log(a * b)
   }
}

r()

