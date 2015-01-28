function filtrarUsuarios(usuarios, filtro){
	var resultado = [];
	usuarios.forEach(function(usuario){
		if(corresponde(usuario, filtro)){
			resultado.push(usuario);
		}
	});
	return resultado;
}

function corresponde(usuario, filtro){
	var c = true;
	var Keys = Object.Keys(filtro);
	Keys.some(function (keyDeFiltro){
		if(usuario[keyDeFiltro] !== filtro[keyDeFiltro]){
			c = false;
			return true;
		}
	});
	//falta algo
}