const botaoCopiar = document.querySelector('#btn-copiar');

botaoCopiar.addEventListener("click", function(event){
	event.preventDefault();

	const textoEncriptado = document.querySelector('#text-encrypted');

	textoEncriptado.select();
	textoEncriptado.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(textoEncriptado.value);

	const mudarTextoEncrypt = document.querySelector('#text-encrypt');
	mudarTextoEncrypt.value = textoEncriptado.value;

	textoEncriptado.value = "";

})
