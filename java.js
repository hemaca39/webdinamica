const canvis = {
    EUR: 1,
    USD: 1.08,
    GBP: 0.86,
    JPY: 162.50
};

const quantitat = document.getElementById("quantitat");
const origen = document.getElementById("origen");
const desti = document.getElementById("desti");
const boto = document.getElementById("btnConvertir");
const resultat = document.getElementById("resultat");

boto.addEventListener("click", convertir);

function convertir(){

    let q = parseFloat(quantitat.value);

    if(isNaN(q) || q <= 0){
        resultat.textContent = "Introdueix una quantitat correcta";
        return;
    }

    let monedaOrigen = origen.value;
    let monedaDesti = desti.value;

    let euros = q / canvis[monedaOrigen];

    let final = euros * canvis[monedaDesti];

    resultat.textContent = "Resultat: " + final.toFixed(2) + " " + monedaDesti;
}

