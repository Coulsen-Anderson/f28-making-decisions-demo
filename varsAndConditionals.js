/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 
let obieanAttack = 25
let AnakinAttack = 35

if(obieanAttack<AnakinAttack){
    console.log('Anakin has a better attack than Obiwan')
} else if(obieanAttack > AnakinAttack){
    console.log('Obiwan has a better attack than Anakin')
} else {
    console.log('Anakin and Obiwan have the same attack')
}

let obiwanHealth = 100
let obiwanDefense = 0

if(AnakinAttack > obiwanHealth){
    console.log('Obiwan has been slayed')
}else {
    obiwanHealth -= AnakinAttack
    console.log(`Obiwans health is now at ${obiwanHealth}`)
}

obiwanDefense += 30

for(let i = 0; i < 5; i++){
    obiwanHealth -= (AnakinAttack - obiwanDefense)

    if(obiwanHealth <= 0){
        console.log('Obiwan was slain')
    } else {
        console.log(`Obiwans health is now at ${obiwanHealth}`)
    }
}

while(obiwanHealth > 0){
    obiwanHealth -= (AnakinAttack - obiwanDefense)
    console.log(`Obiwans health is now at ${obiwanHealth}`)
    if(obiwanHealth <= 0){
        console.log('Obiwan was slayed')
    }
}