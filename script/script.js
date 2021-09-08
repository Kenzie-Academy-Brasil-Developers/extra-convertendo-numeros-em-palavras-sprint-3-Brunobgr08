const unidades = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];
const tenNineteen = ['dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
const dezenas = ['vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa', 'cem'];
const centenas = ['cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos', 'mil'];


function showResults(result){
    // Show Results Katas
    let contn = document.createElement("section");
    contn.className = "container__numGroup";

    let groupTitle = document.createElement("h2");
    groupTitle.className = "numGroup__Title";
    groupTitle.innerText = "Números de " + result[0] + " a " + result[result.length-1];

    contn.appendChild(groupTitle);

    let newResultItem = document.createElement("p");
    newResultItem.className = "resultItem";

    let textResultItem = document.createTextNode(result.join(', '));
    newResultItem.appendChild(textResultItem);

    contn.appendChild(newResultItem);

    const destino = document.getElementById("contnResults");
    destino.appendChild(contn);

}


let oneToTwenty = () => {

    let oneTwenty = [];

    for (let i = 0; i < 20; i++){
        let aux = unidades.concat(tenNineteen, dezenas);
        oneTwenty.push(aux[i]);
    }

    return oneTwenty;
}


showResults(oneToTwenty());
// console.log(oneToTwenty());


let twentyOneToAHundred = () => {

    let twentyOneAHundred = [];

    for (let i = 0; i < dezenas.length-1; i++){
        for (let j = 0; j < unidades.length; j++){
            if (unidades[j] === "nove"){
                    twentyOneAHundred.push(`${dezenas[i]} e ${unidades[j]}`);
                    twentyOneAHundred.push(`${dezenas[i+1]}`);
            } else{
                twentyOneAHundred.push(`${dezenas[i]} e ${unidades[j]}`);
            }
        }
    }
    return twentyOneAHundred;
}

showResults(twentyOneToAHundred());
// console.log(twentyOneToAHundred());


let aHundredOneToOneThousand = () => {

    let aHundredOneOneThousand = [];

    for(let i = 0; i < centenas.length-1; i++){
        let aux = oneToTwenty().concat(twentyOneToAHundred());
        for (let j = 0; j < aux.length-1; j++){
            if (aux[j] === "noventa e nove"){
                aHundredOneOneThousand.push(`${centenas[i]} e ${aux[j]}`);
                aHundredOneOneThousand.push(`${centenas[i+1]}`);
            } else{
                aHundredOneOneThousand.push(`${centenas[i]} e ${aux[j]}`);
            }
        }
    }
    return aHundredOneOneThousand;
}

showResults(aHundredOneToOneThousand());
// console.log(aHundredOneToOneThousand());
