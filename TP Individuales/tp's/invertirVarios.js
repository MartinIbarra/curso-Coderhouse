var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9];

function invertirVarios(arr1, arr2, arr3){
	return {valor1: invertir(arr1),
			valor2: invertir(arr2),
			valor3: invertir(arr3)
	};
}

function invertir(a){
	var resultado = []
	for(var i=0; i<a.length; i++){
		resultado.push(a[a.length - 1 - i]);
	}
	return resultado;
}