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

    function removeAcento (texto){

        var texto = texto.toLowerCase();                                                         
        texto = texto.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
        texto = texto.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
        texto = texto.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
        texto = texto.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
        texto = texto.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
        texto = texto.replace(new RegExp('[Ç]','gi'), 'c');
        return texto;                 
    }

    const textoEncriptado = document.querySelector('#text-encrypted');
    textoEncriptado.value = removeAcento(descriptografa(textEncript));

});