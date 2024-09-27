console.log('1.feladat')
let oldal1 = 10.4;
let oldal2 = 13.5;
let oldal3 = 8.2;


let felszin = 2 * (oldal1 * oldal2 + oldal2 * oldal3 + oldal3 * oldal1);


let terfogat = oldal1 * oldal2 * oldal3;


console.log(`Felszín: ${felszin.toFixed(2)}`);
console.log(`Térfogat: ${terfogat.toFixed(2)}`);

console.log('2.feladat')

let aktualisOra = 14;
let aktualisPerc = 34;
let aktualisMasodperc = 42;


let osszesMasodpercANapban = 24 * 60 * 60; 


let elmultMasodperc = (aktualisOra * 3600) + (aktualisPerc * 60) + aktualisMasodperc;


let hatralevoMasodperc = osszesMasodpercANapban - elmultMasodperc;


console.log(`Hátralévő másodpercek: ${hatralevoMasodperc}`);
console.log('3.feladat')

let tömegKg = 81.2;
let magasságM = 1.78;


let bmi = tömegKg / (magasságM * magasságM);


console.log(`A BMI: ${bmi.toFixed(2)}`);



