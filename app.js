// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Variables
let inputNombre = document.getElementById("amigo");
let listaNombres = [];
let listaBoton = document.getElementById("listaAmigos");
let mensajeResultado = document.getElementById("resultado");

function agregarAmigo() {
    //agrega nombre a la lista
    listaNombres.push(inputNombre.value);
    console.log(listaNombres);
    //muestra el alert si el valor esta vacio
    if (inputNombre.value == ""){
        alert("Por favor, inserte un nombre")
    }
    //muestra el nombre en pantalla
    listaBoton.innerHTML += `<li>${inputNombre.value}</li>`
    //limpia el imput
    document.querySelector('#amigo').value = '';
}

function sortearAmigo(){
    let random = Math.floor(Math.random()* listaNombres.length);
    console.log(random)
    
    let amigoSecreto = listaNombres[random];
  
        mensajeResultado.innerHTML = `<li>Tu amigo Secreto es ${amigoSecreto}</li>`;
}
