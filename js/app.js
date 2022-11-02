var parola = prompt('Inserire una parola?');

if(parola == parola){
    alert('la parola è palindroma');
  } else {
    alert('la parola non è palindroma');
}
  
function invertiParola(word){
  if (Array.from(word).toString() == (Array.from(word).reverse()).toString()) {
    return true
  } else {
    return false
  }
}


const bottoneNumero = document.getElementById("buttonNumero")

bottoneNumero.addEventListener('click', function (){
    numeroInserito = document.getElementById("numero").value;
    paroDisparo = document.getElementById("genere").value;
    numeroComputer = (Math.floor(Math.random() * 5) + 1);

    console.log(numeroInserito);
    console.log(numeroComputer)
    
    
    function somma(num1, num2){
        return(num1 + num2);
    }

    console.log(somma(numeroInserito + numeroComputer)); 
    
})








let pariDispari = prompt("Ora giochiamo a pari o dispari! Scegli tu per primo, pari o dispari?");
let scelta = 0;

while(pariDispari !="pari" && pariDispari !="Pari" && pariDispari !="PARI" && pariDispari !="dispari" && pariDispari !="Dispari" && pariDispari !="DISPARI"){
    pariDispari = prompt("DEVI SCEGLIERE TRA PARI O DISPARI!!!");
}

if(pariDispari == "pari" || pariDispari == "Pari" || pariDispari == "PARI"){
    console.log("Hai scelto pari!")
    scelta = "pari";
}
else if(pariDispari == "dispari" || pariDispari == "Dispari" || pariDispari == "DISPARI"){
    console.log("Hai scelto dispari!")
    scelta = "dispari";
}

let mioNumero = parseInt(prompt("Ora scegli un numero tra 1 e 5!"))
while(mioNumero!=1 && mioNumero!=2 && mioNumero!=3 && mioNumero!=4 && mioNumero!=5){
    mioNumero = parseInt(prompt("DEVI SCEGLIERE UN NUMERO TRA 1 E 5!!!"));
}
console.log("Hai scelto " + mioNumero)

const cpuNumero = Math.floor(Math.random() * 5) + 1;
console.log("Il computer ha scelto " + cpuNumero)

if( ((mioNumero + cpuNumero) % 2 === 0 && scelta === "pari") || ((mioNumero + cpuNumero) % 2 === 1 && scelta === "dispari") ){
    console.log("Hai vinto!")
}
else{
    console.log("Hai perso!")
}