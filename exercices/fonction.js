function superieur (a,b){
    return a > b;
}

function plusGrand (a,b){
    return a > b ? a : b;
}

function derniereValeur(t) {
    let dernierIndice = t.length - 1;
    return t[dernierIndice]; 
}  


function plusPetit(t) {
    let plusPetiteValeur = t[0];
    for (let i = 1; i < t.length; i++) {
      if (t[i] < plusPetiteValeur) {
        plusPetiteValeur = t[i];
      }
    }
    return plusPetiteValeur;
  }