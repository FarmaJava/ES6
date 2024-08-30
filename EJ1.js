
function IsDivisible(a,b) { 
    let Divisible = a % b === 0
    return Divisible
}

let lista = [1,5,10,13,15]
console.log(lista.filter((l1) => IsDivisible(l1,5)))
