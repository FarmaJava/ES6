function VerifyCapicuas(palabra) {
    palabra = palabra.toUpperCase();
    aux = []
    aux2 = []

    for (let i = 0; i < palabra.length; i++) {
        aux.push(palabra[i])
    }
    for ( let i = palabra.length - 1; i > -1; i-- ) {
        aux2.push(palabra[i])
    }

    for (let i = 0; i < palabra.length; i++) {

        if (aux[i] !== aux2[i]) {

            return false
        }
    }
    Acum += palabra.length
    return true
}

let Acum = 0
let Palabra = ["ojo","solos","name"]
const filterCapicuas = Palabra.filter((palabra) => VerifyCapicuas(palabra))
console.log(filterCapicuas)
console.log("La Cantidad de Caracteres de las palabras capicuas son " + Acum);

