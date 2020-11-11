class Ticket{
    constructor(matricula, fechaDeposito, idPlaza, pin, fechaSalida=null, coste=0){
        this.matricula = matricula;
        this.fechaDeposito = fechaDeposito;
        this.idPlaza = idPlaza;
        this.pin = pin;
        this.fechaSalida = fechaSalida;
        this.coste = coste;
    }
    
}

export { Ticket };