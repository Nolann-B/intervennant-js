// EXERCICE 1 

document.querySelector("#btChange").addEventListener("click", function(){
    document.querySelector(".carre.bleu").style.backgroundColor= "green";
});

// EXERCICE 2 

document.querySelector("#img1").addEventListener("click",function(evt){
    console.log(this, this.style.width, this.style.height);
    let largeur = this.clientWidth;  // width existe aussi pour les balises images
    this.style.width = largeur + 20 + "px";
});

// EXERCICE 3

document.querySelector("#inputColor").addEventListener("input", function(event){
    console.log("event Input", event)
    document.querySelector("body").style.backgroundColor = this.value;
    console.log("value", this.value);
})