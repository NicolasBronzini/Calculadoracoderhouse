let displayValorAnterior = document.getElementById('valor-anterior');
let displayValorActual = document.getElementById('valor-actual');
let botonesNumeros = document.querySelectorAll('.numero');
let botonesOperadores = document.querySelectorAll('.operador');

let display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton =>{
    boton.addEventListener('click', () =>{
        display.agregarNumero(boton.innerHTML)
    });
});




botonesOperadores.forEach(boton => {
    boton.addEventListener('click',() => display.computar(boton.value))
});

// eventos switch
let btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");
})



const encodedParams = new URLSearchParams();
encodedParams.append("q", "English is hard, but detectably so");

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': '1ed8aeda67msh1857a6dc5a22309p17e089jsn9421f1f999dd',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	},
	body: encodedParams
};

fetch('https://google-translate1.p.rapidapi.com/language/translate/v2/detect', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));