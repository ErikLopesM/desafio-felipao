let Heroi = "Erikk"
let nivelXP = 10001

let nivelXPDoHeroi

if (nivelXP < 1000) {
    nivelXPDoHeroi = "Ferro"
} else if (nivelXP >= 1001 && nivelXP <= 2000) {
    nivelXPDoHeroi = "Bronze"
} else if (nivelXP >= 2001 && nivelXP <= 5000) {
    nivelXPDoHeroi = "Prata"
} else if (nivelXP >= 5001 && nivelXP <= 7000) {
    nivelXPDoHeroi = "Ouro"
} else if (nivelXP >= 7001 && nivelXP <= 8000) {
    nivelXPDoHeroi = "Platina"
} else if (nivelXP >= 8001 && nivelXP <= 9000) {
    nivelXPDoHeroi = "Ascendente"
} else if (nivelXP >= 9001 && nivelXP <= 10000) {
    nivelXPDoHeroi = "Imortal"
} else {
    nivelXPDoHeroi = "Radiante"
}

console.log(`O Herói ${Heroi} está no nível de ${nivelXPDoHeroi}!`)