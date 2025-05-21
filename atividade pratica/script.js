//getAttribute - Obter o valor do atributo (valor da linha)

//setAttribute - Definir ou modificar o valor

function changeImage() {
    const img = document.getElementByld("myImage"); //Aqui conseguimos armazenar o conteudo da imagem

    const correntSrc = img.getAtribute("src"); //Aqui pegamos o atributo SRC da imagem, responsavel pela alteração da img.


    if (currentSrc === "imagem01.png") { //Se (if) a origem atual da imagem for igual a "imagem01.png"
        img.setAttribute("src", "imagens02.png") //usando o setAttribute vamos modificar o valor do src, especificando a outra img.
        img.setAttribute("alt", "imagem github");
    } else { //Se não, fazer o processo inverso basicamnete
        img.setAttribute("src", "imagem01.png");
img.setAttribute("alt", "imagem github dublo"); }

}

// if = se a condição for valida execute algo
//else = caso contrario / se não