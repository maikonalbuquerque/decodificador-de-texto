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

    

    recebeTextoEncriptado.value = criptografa(textEncript);

});