// 1. Užduotis
// Pakelkite kiekvieną skaičiaus skaitmenį kvadratu ir sujunkite į vieną skaitmenį.
// Pavyzdžiai:
// 1. 23 => 2*2 3*3 => 49
// 2. 563 => 5*5 6*6 3*3 => 25369
// Sąlygos:
// Funkcija priima sveikąjį skaičių ir grąžina sveikąjį skaičių.

function skaiciaiKvadratu(skaicius) {
    const stringas = skaicius.toString();
    console.log(stringas);
    const masyvas = stringas.split('');
    console.log(masyvas);
    const kvadratuMasyvas = masyvas.map(el => el ** 2);
    console.log(kvadratuMasyvas);
    return Number(kvadratuMasyvas.join(''));
}

// Trumpas variantas

/* function skaiciaiKvadratu(skaicius) {
    return Number(skaicius.toString().split('').map(el => el * el).join(''));
}
console.log(skaiciaiKvadratu(3278)); //944964 */

// 2. Užduotis
// Patikrinkite, ar skaičiai masyve išdėlioti didėjimo ar mažėjimo tvarka ir grąžinkite vieną iš šių reikšmių:
// „didėjimo tvarka“ – jei masyvo skaičiai yra surūšiuoti didėjimo tvarka;
// „mažėjimo tvarka“ – jei masyvo skaičiai yra surūšiuoti mažėjimo tvarka;
// „nei didėjimo nei mažėjimo tvarka“ – kitaip.

// Sąlygos:
// Pateikiamas masyvas visada bus teisingas, ir visada bus tik vienas teisingas atsakymas.

// a. Variantas, lyginant duotą masyvą su išrūšiuotais masyvais:
function ArIrKaipIsrusiuotas(masyvas) {
    const didejimoTvarka = masyvas.every((_, i) => i === 0 || masyvas[i] >= masyvas[i - 1]);
    const mazejimoTvarka = masyvas.every((_, i) => i === 0 || masyvas[i] <= masyvas[i - 1]);

    if (didejimoTvarka) {
        return 'didėjimo tvarka';
    } if (mazejimoTvarka) {
        return 'mažėjimo tvarka';
    }
    return 'nei didėjimo nei mažėjimo tvarka';
}

// Kitas variantas
/* function ArIrKaipIsrusiuotas(masyvas) {
    const didejimoTvarka = [...masyvas].sort((a, b) => a - b);
    const mazejimoTvarka = [...masyvas].sort((a, b) => b - a);
    console.log(masyvas);
    console.log(didejimoTvarka);
    console.log(mazejimoTvarka);
    if (masyvas.every((_, i) => masyvas[i] === didejimoTvarka[i])) {
        return 'didėjimo tvarka'
    }
    if (masyvas.every((_, i) => masyvas[i] === mazejimoTvarka[i])) {
        return 'mažėjimo tvarka'
    }
    return 'nei didėjimo nei mažėjimo tvarka';
}; */

// b. Variantas, lyginant masyvo elementus tarpusavyje:
/* function ArIrKaipIsrusiuotas(masyvas) {
    let didejimo = true;
    let mazejimo = true;

    for (let i = 0; i < masyvas.length - 1; i++) {
        if (masyvas[i] < masyvas[i + 1]) {
            mazejimo = false;
        } else if (masyvas[i] > masyvas[i + 1]) {
            didejimo = false;
        }
    }

    if (didejimo) {
        return 'didėjimo tvarka';
    } else if (mazejimo) {
        return 'mažėjimo tvarka';
    } else {
        return 'nei didėjimo nei mažėjimo tvarka';
    }
} */

console.log(ArIrKaipIsrusiuotas([1, 2, 3])); //didėjimo tvarka
console.log(ArIrKaipIsrusiuotas([3, 2, 1])); //mažėjimo tvarka
console.log(ArIrKaipIsrusiuotas([2, 3, 1])); //nei didėjimo nei mažėjimo tvarka

// 3. Užduotis
// Jums pateikti du simboliai, patikrinkite ar abu simboliai yra to paties tipo (mažosios arba didžiosios), ar bent vienas iš jų nėra raidė, ir grąžinkite:
// „1“ – jei abu yra didžiosios raidės arba abu yra mažosios raidės (pvz, 'a' ir 'b', 'C' ir 'D');
// „0“ – jei abu yra raidės bet skirtingu raidžių tipai (vien mažoji, kita didžioji)(pvz, 'a' ir 'B', 'C' ir 'd');
// „-1“ – jei bent vienas iš simbolių nėra raidė

// a. Variantas, kai tik lotyniškos raidės
function tosPaciosRaides(raide1, raide2) {
    const didziojiRaide1 = raide1.charCodeAt(0) >= 65 && raide1.charCodeAt(0) <= 90;
    const didziojiRaide2 = raide2.charCodeAt(0) >= 65 && raide2.charCodeAt(0) <= 90;
    const mazojiRaide1 = raide1.charCodeAt(0) >= 97 && raide1.charCodeAt(0) <= 122;
    const mazojiRaide2 = raide2.charCodeAt(0) >= 97 && raide2.charCodeAt(0) <= 122;

    if ((didziojiRaide1 && didziojiRaide2) || (mazojiRaide1 && mazojiRaide2)) {
        return 1
    } else if ((didziojiRaide1 || mazojiRaide1) && (didziojiRaide2 || mazojiRaide2)) {
        return 0
    } else {
        return -1;
    }
}

console.log(tosPaciosRaides('a', 'b')); // 1
console.log(tosPaciosRaides('A', 'B')); // 1
console.log(tosPaciosRaides('a', 'B')); // 0
console.log(tosPaciosRaides('A', 'b')); // 0
console.log(tosPaciosRaides('.', 'b')); // -1
console.log(tosPaciosRaides('.', '?')); // -1


// b. Variantas, kai visos raidės tinka, ne tik lotynų abėcėlės
function tosPaciosRaides1(raide1, raide2) {
    const didziojiRaide1 = raide1.toUpperCase();
    const didziojiRaide2 = raide2.toUpperCase();
    const mazojiRaide1 = raide1.toLowerCase();
    const mazojiRaide2 = raide2.toLowerCase();

    if (mazojiRaide1 === didziojiRaide1 || mazojiRaide2 === didziojiRaide2) {
        return -1;
    } else if ((raide1 === didziojiRaide1 && raide2 === didziojiRaide2) || (raide1 === mazojiRaide1 && raide2 === mazojiRaide2)) {
        return 1;
    } else if ((raide1 === didziojiRaide1 || raide1 === mazojiRaide1) && (raide2 === didziojiRaide2 || raide2 === mazojiRaide2)) {
        return 0;
    } else {
        return 'kažkas ne taip';
    }
}

// Trumpas variantas
/* function tosPaciosRaides1(raide1, raide2) {
    const lietuviiskosRaides = 'ąčęėįšųūžĄČĘĖĮŠŲŪŽ';
 
    if (lietuviiskosRaides.includes(raide1) && lietuviiskosRaides.includes(raide2)) {
        if ((raide1 === raide1.toUpperCase() && raide2 === raide2.toUpperCase()) ||
            (raide1 === raide1.toLowerCase() && raide2 === raide2.toLowerCase())) {
            return 1;
        }
        return 0;
    }
    return -1;
} */

console.log(tosPaciosRaides1('ą', 'č')); // 1
console.log(tosPaciosRaides1('Ą', 'Č')); // 1
console.log(tosPaciosRaides1('ą', 'Č')); // 0
console.log(tosPaciosRaides1('Ą', 'č')); // 0
console.log(tosPaciosRaides1('.', 'č')); // -1
console.log(tosPaciosRaides1('ą', '?')); // -1


// 4. Užduotis
// Prašykite funkciją, kuri grąžina masyvo ne nelyginius skaičius.

// Sąlygos:
// Visi paduodami masyvai bus sudaryti iš sveikųjų skaičių.
// Atrinkti skaičiai turi būti grąžinti ta pačia tvarka kaip originaliame masyve.

function neNelyginiai(masyvas) {
    let lyginiai = []; //čia lyginių sk. masyvas
    for (let i = 0; i < masyvas.length; i++) {
        if (masyvas[i] % 2 === 0) { // tikrinu, ar masyvas sk. dalijasi iš 2
            lyginiai.push(masyvas[i]); //jei sk. lyginis, jis pridedamas prie lyginiai masyvo su push() metodu
        }
    }
     return lyginiai;
}

console.log(neNelyginiai([0, 1, 2])); // [0, 2]
console.log(neNelyginiai([-3, -2, -1, 0, 1, 2])); // [-2, 0, 2]

// 5. Užduotis
// Parašykite funkciją, kuriai paduodamas masyvas ir skaičius, funkcija turi grąžinti pakeistą masyvą, kuriame elementai kartojasi tik tiek kartų, kiek nurodo paduodamas skaičius.
// Pavyzdžiai:
// ([1, 3, 4, 1, 4, 1, 4, 3], 2) => [1, 3, 4, 1, 4, 3]
// ([45, 81, 96, 45, 37, 81], 1) => [45, 81, 96, 37]

// Sąlygos:
// Atrinkti skaičiai turi būti grąžinti ta pačia tvarka kaip originaliame masyve.

// a. Variantas einant ciklu per masyvą
function nedaugiauNeiNKartu(masyvas, n) {
    const rezultatas = []; // tuščias masyvas elementams dėti
    const kartojimas = {}; // objektas, skaičiuosiantis, kiek k. kiekv. elementas pasikartojo

    for (let i = 0; i < masyvas.length; i++) { 
        const elementas = masyvas[i];
        kartojimas[elementas] = (kartojimas[elementas] || 0) + 1; // kai tik elementas sutinkamas, jo sk. kartojimas[elementas] padidinamas vienu.

        if (kartojimas[elementas] <= n) {
            rezultatas.push(elementas); // kai sk. yra < arba = n, elementas pridedamas į rezultatas masyvą.
        }
    }
    return rezultatas;
}

// b. Variantas naudojant filtravimą filtravime.
function nedaugiauNeiNKartu(masyvas, n) {
    // čia visa logika
     return 
}

console.log(nedaugiauNeiNKartu([1, 3, 4, 1, 4, 1, 4, 3], 2)); // [1, 3, 4, 1, 4, 3]
console.log(nedaugiauNeiNKartu([45, 81, 96, 45, 37, 81], 1)); // [45, 81, 96, 37]

// 6. Užduotis
// Parašykite funkciją, kuriai paduodami du skaičiai (a, b), funkcija sudeda pirmojo skaičiaus (a) skaitmenis prieš tai pakeliant juos laipsniu (b) (pirmas skaitmuo keliamas laipsniu (b), laipsnis didėja vienetu kiekvienam sekančiam skaitmeniui).
// Funkcija patikrina ar gauta skaičiaus (a) skaitmenų pakeltų laipsniu suma, be liekanos talpina savyje skaičių, jei taip tai grąžina kiek kartų, jei ne - grąžina -1;

// Pavyzdžiai:
// (89, 1) => 8 ** 1 + 9 ** 2 = 8 + 81 = 89 / 89 = 1
// (695, 2) => 6 ** 2 + 9 ** 3 + 5 ** 4 = 36 + 729 + 625 = 1390 / 695 = 2 

function skaiciuLaipsniai(a, b) { // a - skaičius, b - pradžios laipsnis
    const skaitmenys = a.toString().split('').map(Number); // sk. a konvertuoju į eilutę, kad būtų galima pasiekti jo skaitmenis; split() padalina sk. į skaitmenis; map(number) juos vėl paverčia į sk.
    const sumaPakeltuLaipsniu = skaitmenys.reduce((akumuliatorius, skaitmuo, index) => { // apskaičiuoju visų skaitmenų sumą, pakeltų atitinkamu laipsniu
        return akumuliatorius + Math.pow(skaitmuo, b + index);
    }, 0);

    if (sumaPakeltuLaipsniu % a === 0) {
        return sumaPakeltuLaipsniu / a;
    } else {
        return -1;
    }
}

console.log(skaiciuLaipsniai(89, 1)); // 1
console.log(skaiciuLaipsniai(695, 2)); // 2
console.log(skaiciuLaipsniai(46288, 3)); // 51
console.log(skaiciuLaipsniai(92, 2)); // -1

// 7. Užduotis
// Parašykite funkciją, kuri priima vieną argumentą kaip vardą, prideda pasveikinimą priekyje vardo, vardą pradeda didžiąją raide (kitos mažosios) ir užbaigia su šauktuku.

// Pavyzdžiai:
// 'oliveri' -> 'Labas Oliveri!'
// 'šeRLokaI' -> 'Labas Šerlokai!'

function pasisveikinimas(vardas) {
    let pirmaVardoRaide = vardas.charAt(0).toUpperCase(); // didžioji r.
    let kitosVardoRaides = vardas.slice(1).toLowerCase(); // mažosios r.
    let sutvarkytasVardas = pirmaVardoRaide + kitosVardoRaides;
    return 'Labas, ' + sutvarkytasVardas + '!';
}
console.log(pasisveikinimas('anTUAnai')); // Labas, Antuanai!
console.log(pasisveikinimas('LiuDVikai')); // Labas, Liudvikai!

// 8. Užduotis
// Parašykite funkciją, kuriai paduodame kortą (pvz. 4♦, 10♥, Q♣, A♠) ir kuri grąžina kortos rūšies pavadinimą žodžiais (pvz., būgnai, širdys, kryžiai, vynai).

// a. Variantas su if
function kortosRusis(korta) {
    if (korta.endsWith('♦')) {
        return 'būgnai';
    } else if (korta.endsWith('♥')) {
        return 'širdys';
    } else if (korta.endsWith('♣')) {
        return 'kryžiai';
    } else if (korta.endsWith('♠')) {
        return 'vynai';
    } else {
        return 'nežinoma korta';
    }
}

// b. Variantas su switch
/* function kortosRusis(korta) {
    switch (korta.charAt(korta.length - 1)) {
        case '♦':
            return 'būgnai';
        case '♥':
            return 'širdys';
        case '♣':
            return 'kryžiai';
        case '♠':
            return 'vynai';
        default:
            return 'nežinoma korta';
    }
} */

console.log(kortosRusis('4♦')); // būgnai
console.log(kortosRusis('10♥')); // širdys
console.log(kortosRusis('Q♣')); // kryžiai
console.log(kortosRusis('A♠')); // vynai

// 9. Užduotis
// Yra mitas, kaip gali nuspėti gyvenimo trukmę. Reikia paimti prosenelių amžių kai jie mirė, jį pakelti kvadratu, gautus metus sudėti, iš jų ištraukti kvadratinę šaknį padalinti pusiau ir suapvalinti į mažesnę pusę. Parašykite funkciją, kuri tai atliktų.

// a. variantas su dirbant su kiekvienu argumentu
function amziausSpejimas(metai1, metai2, metai3, metai4, metai5, metai6, metai7, metai8) {
   // čia visa logika
    return 
}

// b. Variantas paimant argumentus kaip masyvą
function amziausSpejimas(metai1, metai2, metai3, metai4, metai5, metai6, metai7, metai8) {
    const metai = [metai1, metai2, metai3, metai4, metai5, metai6, metai7, metai8].map(Number); // paverčiu sk.
    const metaiSkaitmenys = metai.map(Number); // čia tik sk.
    const proseneliaiKvadratu = metaiSkaitmenys.reduce((akumuliatorius, metuSkaicius) => akumuliatorius + Math.pow(metuSkaicius, 2), 0);
    const kvadratineSaknis = Math.sqrt(proseneliaiKvadratu);
    const prognozuojamasAmzius = Math.floor(kvadratineSaknis / 2);
    return prognozuojamasAmzius;
}

console.log(amziausSpejimas('65', '87', '30', '58', '92', '78', '68', '73')); // 100
console.log(amziausSpejimas('5', '7', '3', '5', '2', '7', '6', '3')); // 7

// 10. Užduotis
// Parašykite funkciją, kuriai paduodamas stringas, kuriame reikšmės atskirtos kableliais. Funkcija turi grąžinti stringą, kuriame pašalinti pirmas ir paskutinis elementai, o skyrikliui vietoje kablelio naudojamas tarpas. Jei nėra ką grąžinti pagal nurodytas sąlygas, grąžinamas null.

function trumpasStringasSuTarpais(stringas) {
    if (!stringas || stringas.split(',').length <= 2) { //  2, nes kitu atveju nepavyks grąžinti vidurio(?)
        return null;
    }
    const elementai = stringas.split(',');
    const rezultatas = elementai.slice(1, -1).join(' ').trim();

    return rezultatas;
}

console.log(trumpasStringasSuTarpais('')); // null
console.log(trumpasStringasSuTarpais('5, 6')); // null
console.log(trumpasStringasSuTarpais('1,5,6,8')); // 5 6
console.log(trumpasStringasSuTarpais('saulė,pieva,jūra,lietus')); // pieva jūra

// 11. Užduotis
// Parašykite funkciją, kuri 'nupieštų eglutę' iš simbolio *, eglutės aukštis - funkcijai paduodamas argumentas. Kiekvienoje eilutėje prisideda 2 *. 

// Pavyzdys:
// eglute(3) atrodys taip:
//    *
//   ***  
//  *****

// a. Variantas naudojant for ciklą
function eglute(aukstai) {
    let rez = '';
    for (let i = 0; i < aukstai; i++) {
        const tarpai = ' '.repeat(aukstai - i - 1);
        const asteriksai = '*'.repeat(2 * i + 1);
        rez += tarpai + asteriksai + '\n';
    }
    return rez;
}

// b. Variantas naudojant .map
function eglute(aukstai) {
    // čia visa logika
    return
}

console.log(eglute(4));
//    *
//   ***  
//  ***** 
// *******
console.log(eglute(5));
//     *
//    ***
//   *****
//  *******
// *********

// 12. Užduotis
// Parašykite funkciją, kuri pašalina visus '!' iš stringo ir grąžina stringą tik su šauktuku gale.

function sauktukai(stringas) {
    let sauktukasTikGale = stringas.replace(/!/g, ''); // g - globalus žymuo, nurodantis, kad replace() metodas turėtų ieškoti ir pakeisti visus atitikmenis, o ne tik pirmąjį;)
    return sauktukasTikGale.trim() + '!';
}

console.log(sauktukai("Cha!")); // Cha!
console.log(sauktukai("Cha!!!")); // Cha!
console.log(sauktukai("!Cha")); // Cha!
console.log(sauktukai("Cha! Cha!")); // Cha Cha!

// 13. Užduotis
// Duotas masyvas su teigiamais ir neigiamais skaičiais. Parašykite funkciją, kuri masyve pakeis neigiamus skaičius į teigiamus ir atvirkščiai.

function keitimas(masyvas) {
    const rezultatas = []; // tuščias masyvas rezultatams laikyti
    for (let i = 0; i < masyvas.length; i++) {
        const skaicius = masyvas[i]; // pasiimu sk.
        const pakeistasSkaicius = -skaicius; // pakeičiu jo ženklą
        rezultatas.push(pakeistasSkaicius); // pridedu pakeistą sk. į rezultatų masyvą
    }
    return rezultatas;
}

console.log(keitimas([-4, 2, 0, 6, -9])); // [4, -2, 0, -6, 9]
console.log(keitimas([5, 13, -67, -71])); // [-5, -13, 67, 71]


// 14. Užduotis
// Parašykite funkciją, kuriai paduodamas skaičius, o ji grąžina artimiausią skaičių, kuris yra kažkokio skaičiaus kvadratas.

// Pavyzdys:
// artimiausiasKvadratas(5) -> artimiausias kvadratas 4 (2**2)
// artimiausiasKvadratas(35) -> artimiausias kvadratas 36 (6**2)

function artimiausiasKvadratas(sk) {
    let n = Math.round(Math.sqrt(sk));
    return n * n;
}

console.log(artimiausiasKvadratas(5)); // 4
console.log(artimiausiasKvadratas(9)); // 9
console.log(artimiausiasKvadratas(111)); // 121

// 15. Užduotis
// Žmonės stovi bendroje eilėje, vėliau žmonės skirstosi į dvi eiles, pirmas žmogus eina į pirmą eilę, antras į antrą, trečias į pirmą, ketvirtas į antrą ir t.t.
// Parašykite funkciją, kuriai paduodamas masyvas su žmonių svoriais, o grąžinama pirmos eilės žmonių svorių suma ir antros eilės žmonių svorių suma, kaip masyvas.

// Pavyzdys:
// eiliuSvoriai([48, 44, 62, 76]) => [110, 120]

function eiliuSvoriai(masyvas) {
    let suma1 = 0; // pirmos eilės suma
    let suma2 = 0; // antros eilės suma

    for (let i = 0; i < masyvas.length; i++) {
        if (i % 2 === 0) {
            suma1 += masyvas[i]; // pirmas, trečias...
        } else {
            suma2 += masyvas[i]; // antras, ketvirtas... 
        }
    }
    return [suma1, suma2];
}

console.log(eiliuSvoriai([48, 44, 62, 76])); // [110, 120]
console.log(eiliuSvoriai([50, 60, 70, 80])); // [120, 140]

// 16. Užduotis
// Parašykite funkciją, kuriai paduodami du string'ai ir kuri grąžina stringą sudarytą iš visų abejuose string'uose esančių raidžių pagal abėcėlę, raidės turi nesikartoti.

// Pavyzdys:
// didelisStringas('vasara', 'pavasaris') => aiprsv
// didelisStringas('as', 'tu') => aiprsv

function didelisStringas(stringas1, stringas2) {
    const sujungtasStringas = stringas1 + stringas2;
    const savotiskas = []; // čia laikysiu pavienes raides
    
    for (let raide of sujungtasStringas) {
        if (!savotiskas.includes(raide)) { // tikrinu, ar raidė jau yra savotiskas masyve
            savotiskas.push(raide); // jei ne, raidę pridėsiu su push() 
        }
    }
    savotiskas.sort();
    return savotiskas.join('');
}

console.log(didelisStringas('labanakt', 'vidurvasaris')); // abdiklnrstuv
console.log(didelisStringas('saulekaita', 'kopustiene')); // aeiklnopstu
console.log(didelisStringas('vasara', 'pavasaris')); // aiprsv
console.log(didelisStringas('as', 'tu')); // astu

// 17. Užduotis
// Jūs norite užsisakyti reklamą švieslentėje. Vieno simbolio kaina 3Eur (tarpas taip pat simbolis). Parašykite funkciją, kuri apskaičiuotų reklamos kainą. Funkcijoje nenaudokite '*' simbolio daugybai.

function reklama(stringas, kaina) {
    let simboliai = 0;
    for (let i = 0; i < stringas.length; i++) {
        simboliai = simboliai + 1;
    }
    let kainaViso = 0;
    for (let i = 0; i < simboliai; i++) { // ciklas vyksta tiek, kiek yra simbolių + kaina
        kainaViso = kainaViso + kaina; 
    }
    return kainaViso;
}

console.log(reklama('Sveiki atvykę!', 3)); // 42
console.log(reklama('Geriausi makaronai mieste!', 3)); // 78

// 18. Užduotis
// Parašykite funkciją, kuri priims stringą iš skaičių. Ir skaičius mažesnius už 5 pakeis 0, o didesnius ar lygius 5 pakeis 1. Funkcija grąžins stringą.

function stringasIskaicius(stringas) {
    let rezultatas = ''; // čia bus saugomi nauji simboliai
    for (let simbolis of stringas) {
        let skaicius = parseInt(simbolis); // kiekv. simbolį konvertuoju į sveikąjį sk.
        if (skaicius < 5) {
            rezultatas += '0';
        } else {
            rezultatas += '1';
        }
    }
    return rezultatas;
}

console.log(stringasIskaicius('4536271809')); // 0101010101

// 19. Užduotis
// Parašykite funkciją, kuri panaikins šauktuką jeigu jis yra paskutinis simbolis duotame string'e.

/* function paskutiniaiSauktukai(stringas) {
    if (stringas.endsWith('!')) {
        return stringas.slice(0, -1);
    }
    return stringas; // grąžino paskutinį log kaip 'Cha Cha!!!!' - nuėmė tik vieną šauktuką iš galo
} */
function paskutiniaiSauktukai(stringas) {
    while (stringas.endsWith('!')) {
        stringas = stringas.slice(0, -1);
    }
    return stringas;
}

console.log(paskutiniaiSauktukai('Cha!')); // 'Cha'
console.log(paskutiniaiSauktukai('Cha! Cha')); // 'Cha! Cha'
console.log(paskutiniaiSauktukai('Cha Cha!')); // 'Cha Cha'
console.log(paskutiniaiSauktukai('Cha Cha!!!!!')); // 'Cha Cha'

// 20. Užduotis
// Paraškykite funkciją, kuri grąžins didžiausią funkcijai pateikto masyvo skaičių.

function didziausiasSkaicius(masyvas) {
    let didziausiasSkaicius = masyvas[0]; // pirmą elementą deklaravau kaip didžiausią 
    for (let i = 1; i < masyvas.length; i++) {
        if (masyvas[i] > didziausiasSkaicius) {
            didziausiasSkaicius = masyvas[i];
        }
    }
    return didziausiasSkaicius;
}

console.log(didziausiasSkaicius([23, 54, 100, 35, 1, 78])); // 100
console.log(didziausiasSkaicius([156, 7, 17643, 635, 13, 1456])); // 17643