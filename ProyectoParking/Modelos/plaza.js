class Plaza{
    constructor(id, vehiculo, ocupada=false, cliente=null){
        this.id = id;
        this.vehiculo = vehiculo;
        this.ocupada = ocupada;
        this.cliente = cliente;
    }
}

export {Plaza};