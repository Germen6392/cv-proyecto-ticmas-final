/* Mostrar datos personales que se encuentran ocultos*/
function mostrarDatosPersonales(){
	document.getElementById("ver-mas").addEventListener("click", function(){
	document.getElementById("info-oculta").style.display = "flex";
});
}
mostrarDatosPersonales();
/*Ver información sobre mi experiencia que se encuentra oculta*/
function verExperiencia(){
	document.querySelector("#btn-detalles-trabajo").addEventListener("click", function(){
	document.querySelector(".descripcion-trabajo").className = "ver-descripcion-trabajo";
});
}
verExperiencia();
/*Ver lenguajes de programación ocultos en habilidades*/
function verLenguajes(){
	document.querySelector("#btn-lenguajes-ocultos").addEventListener("click", function(){
	document.querySelector(".lenguaje-oculto").className = "ver-lenguaje";
});
}
verLenguajes();



