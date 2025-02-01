// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let numeroGenerado;
let numeroGeneradoAnterior = null;

function agregarAmigo() {
	//console.log("pruebo agregar amigo");
	let amigo = document.getElementById("amigo").value;
	console.log(amigo);

	if (amigo !== "" && amigo.length > 0) {
		//console.log("La cadena no está vacía");
		amigos.push(amigo);
		console.log(amigos)
	} else {
		alert("Por favor, inserte un nombre válido.")
	}
	limpiarCaja();
	actualizarListaAmigos();
	return;	
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function actualizarListaAmigos() {
	let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";
	for (let i = 0; i < amigos.length; i++) {
		var nuevoLi = document.createElement("li");
		nuevoLi.textContent = amigos[i];		
		lista.appendChild(nuevoLi);
	}
    return;
}

function sortearAmigo() {
	if (!amigos.length) {
		//console.log("amigos está vacío");
		alert("Aún no has añadido amigos para sortear");
	} else {
		//console.log("amigos no está vacío");
		if (amigos.length > 1) {			
			cantidadAmigos = amigos.length;
			//console.log(cantidadAmigos);
			numeroGenerado =  Math.floor(Math.random()*cantidadAmigos);
			//console.log(numeroGenerado);			
			while (numeroGeneradoAnterior === numeroGenerado) {				
				//console.log("anterior y posterior son iguales");
				numeroGenerado =  Math.floor(Math.random()*cantidadAmigos);
				//console.log(numeroGenerado);				
			}			
			numeroGeneradoAnterior = numeroGenerado;
			let amigoSorteado = amigos[numeroGenerado];
			//console.log(amigoSorteado);
			let resultado = document.querySelector("#resultado");
			resultado.innerHTML = amigoSorteado;
		} else {
			let resultado = document.querySelector("#resultado");
			resultado.innerHTML = amigos[0];
			numeroGeneradoAnterior = amigos[0];
		}
	}
	return;
}
