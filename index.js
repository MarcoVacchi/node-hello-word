// quando aggiungo watch il terminale rimane in attesa, per sbloccarlo devo usare CONTROL + C;



console.log("Hello Boolean");

// let word = process.argv[2];
// let wooord = process.argv[3];

// console.log(`${wooord} ${word}`);

let prashe = ""

for (let i = 2; i < process.argv.length; i++) {

    const element = process.argv[i];
    prashe += element + " ";

}

console.log(prashe); //metodo ciclo for;
