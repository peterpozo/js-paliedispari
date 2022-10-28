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
