class ClienteAbonado{

    constructor(dni, nombre, apellidos, numTarjeta, email, vehiculo, abono=null){
        this.dni = dni;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.numTarjeta = numTarjeta;
        this.email = email;
        this.vehiculo = vehiculo;
        this.abono = abono;
        

    }
}


export {ClienteAbonado};