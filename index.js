let displayValorAnterior = document.getElementById('valor-anterior');
let displayValorActual = document.getElementById('valor-actual');
let bottonesNumeros = document.querySelectorAll('.numero');
let botonesOperadores = document.querySelectorAll('.operador');

let display = new Display(displayValorAnterior, displayValorActual);

bottonesNumeros.forEach(boton =>{
    boton.addEventListener('click', () =>{
        display.agregarNumero(boton.innerHTML)
    });
});