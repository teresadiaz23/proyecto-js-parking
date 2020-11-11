class ClienteAbonado{

    constructor(dni, nombre, apellidos, numTarjeta, email, abono=null ){
        this.dni = dni;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.numTarjeta = numTarjeta;
        this.email = email;
        this.abono = abono;
        

    }
}


export {ClienteAbonado};