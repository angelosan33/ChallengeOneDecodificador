var criptado = document.querySelector('.cripto');
var desencriptado = document.querySelector('.descripto');
var image = document.querySelector('.imagem');
var h3 = document.querySelector('.texto-h3');
var paragrafo = document.querySelector('.texto-paragrafo');
var secreto = document.querySelector('.texto-secreto');
var botao = document.querySelector('.botao');
var copiar = document.querySelector('.botao-copy');
var resultado = document.querySelector('.texto-encriptado');

criptado.onclick = encriptar;
desencriptado.onclick = desincriptar;
copiar.onclick = copiarParaAreaTrabalho;

function encriptar() {
	ocultar();
	resultado.textContent = transformaTexto(recuperarTexto());
	desocultar();
	
}

function desincriptar(){
	ocultar();
	resultado.textContent = destransformaTexto(recuperarTexto());
	desocultar();
}

function recuperarTexto() {
	var texto = document.querySelector('.caixa-texto');
	return texto.value.toLowerCase();
}

function ocultar() {
	image.classList.add('ocultar');
	h3.classList.add('ocultar');
	paragrafo.classList.add('ocultar');
}


function desocultar(){
	secreto.classList.remove('ocultar');
	botao.classList.remove('ocultar');
}

function limpar(){
	image.classList.remove('ocultar');
	h3.classList.remove('ocultar');
	paragrafo.classList.remove('ocultar');
	secreto.classList.add('ocultar');
	botao.classList.add('ocultar');
	document.querySelector('.caixa-texto').value = "";
}

function copiarParaAreaTrabalho(){
	let conteudo = document.getElementById('para-copiar');
	conteudo.select();
	/*document.querySelector('.texto-encriptado').select();*/
	document.execCommand('copy');
}

function transformaTexto(mensagem) {
	var texto = mensagem;
	var textofinal = "";

	for (var i = 0; i < texto.length; i++) {
		if(texto[i] == 'a'){
			textofinal = textofinal + "ai";
		}
		else if(texto[i] == 'e'){
			textofinal = textofinal + "enter";
		}
		else if(texto[i] == 'i'){
			textofinal = textofinal + 'imes';
		}
		else if(texto[i] == 'o'){
			textofinal = textofinal + 'ober';
		}
		else if(texto[i] == 'u'){
			textofinal = textofinal + 'ufat'
		}
		else{
			textofinal = textofinal + texto[i];
		}

	}
	return textofinal;
}

function destransformaTexto(mensagem) {
	var texto = mensagem;
	var textofinal = "";

	for (var i = 0; i < texto.length; i++) {
		if(texto[i] == 'a'){
			textofinal = textofinal + "a";
			i = i + 1;
		}
		else if(texto[i] == 'e'){
			textofinal = textofinal + "e";
			i = i + 4;
		}
		else if(texto[i] == 'i'){
			textofinal = textofinal + 'i';
			i = i + 3;
		}
		else if(texto[i] == 'o'){
			textofinal = textofinal + 'o';
			i = i + 3;
		}
		else if(texto[i] == 'u'){
			textofinal = textofinal + 'u';
			i = i + 3;
		}
		else{
			textofinal = textofinal + texto[i];
		}

	}
	return textofinal;
}