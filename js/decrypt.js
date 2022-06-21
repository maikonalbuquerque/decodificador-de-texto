const botaoDescriptografar = document.querySelector('#btn-decriptar');


botaoDescriptografar.addEventListener("click", function(event){
    event.preventDefault();

    const decriptar = document.querySelector("#text-encrypt");
    let textEncript = decriptar.value;


    function descriptografa(texto){

        var resultado = texto.replace(/enter/gi, 'e') 
        resultado = resultado.replace(/imes/gi, 'i') 
        resultado = resultado.replace(/ai/gi, 'a') 
        resultado = resultado.replace(/ober/gi, 'o')
        resultado = resultado.replace(/ufat/gi, 'u')
   
    return resultado
}

    const textoEncriptado = document.querySelector('#text-encrypted');
    textoEncriptado.value = descriptografa(textEncript);

});