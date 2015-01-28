function Vehiculo(){
	this.ruedas = 4;	
}
function Camion(){
	this.caja = "velocidad";
}
Camion.prototype = new Vehiculo();