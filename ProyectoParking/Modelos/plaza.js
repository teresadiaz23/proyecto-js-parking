class Plaza{
    constructor(id, tipoVehiculo, tarifa, ocupada=false, cliente=null){
        this.id = id;
        this.tipoVehiculo = tipoVehiculo;
        this.tarifa = tarifa;
        this.ocupada = ocupada;
        this.cliente = cliente;
    }
}

export { Plaza };