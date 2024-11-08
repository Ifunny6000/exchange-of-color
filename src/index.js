function elementoRemoverCor(){
    const elemento = document.getElementById("elementoParaRemover");
    if (elemento) {
        
        console.log("classes antes:", elemento.className)

        elemento.classList.remove("quadradoNegro");
        elemento.classList.add("quadradoAzul")
    }else {
        console.log("Elemento não encontrado")
    }
}