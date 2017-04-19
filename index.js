var num1 = prompt("Ingresa un numero del 1 al 20");
 document.write(num1);

function getRandom(){

	var aleatorio = Math.round(Math.random()*(20-1));
		console.log("Numero aleatorio entre 0 y 20 : " + aleatorio);

	if(num1==aleatorio){
		console.log("acertastes");

	}

	console.log("Los numero que ud dio es "+num1+" el numero random es "+aleatorio);

}

getRandom();