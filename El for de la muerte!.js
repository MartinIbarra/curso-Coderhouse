for(var i = 0; i < 10; i++){
	function porCadaIteracion(){
		var i3 = i;
		setTimeout(function(){console.log(i3);}, 77);
	}
	porCadaIteracion();
}