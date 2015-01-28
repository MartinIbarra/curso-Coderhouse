function contexto1() { 
     var contador = 0;
     return{
     	inc: function(){contador++;},
		dec: function(){contador--;}, 
		res: function(){contador = 0; return contador },
		dameContador: function(){return contador}
	}
}

function Mesa(){
	this.tamaño = 5;
	//console.log(this);
}

function crearMesa(){
	return new Mesa();
}