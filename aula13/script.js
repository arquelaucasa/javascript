// aqui estamamos recuperando noos IG está np html
let meuElemento = document.getElementById("meuElemento"); 


function tornarCirculo() {
    meuElemento.classList.add("circle"); // adiciono uma class para arredondar o quadrado
    
    meuElemento.classList.remove("square"); // removo uma class para  
}

function tornarQuadrado() {
    meuElemento.classList.add("square"); //

    meuElemento.classList.remove("circle");
}

function altenarFormato() {
    meuElemento.classList.toggle("circle");
    meuElemento.classList.toggle("square");

}