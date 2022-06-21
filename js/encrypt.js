const botaoCriptografar = document.querySelector('#btn-encriptar');


botaoCriptografar.addEventListener("click", function(event){
    event.preventDefault();

    const encriptar = document.querySelector("#text-encrypt");
    const recebeTextoEncriptado = document.querySelector("#text-encrypted");

    let textEncript = encriptar.value;

    function criptografa(texto){

        var resultado = texto.replace(/e/gi, 'enter') 
        resultado = resultado.replace(/i/gi, 'imes') 
        resultado = resultado.replace(/a/gi, 'ai') 
        resultado = resultado.replace(/o/gi, 'ober')
        resultado = resultado.replace(/u/gi, 'ufat')
   
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

    

    recebeTextoEncriptado.value = removeAcento(criptografa(textEncript));

});