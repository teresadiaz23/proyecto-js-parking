class Vehiculo{
    constructor(tarifa, matricula=null){
        this.tarifa = tarifa;
        this.matricula = matricula;
    }
}

class Turismo extends Vehiculo{

}

class Motocicleta extends Vehiculo{

}

class Caravana extends Vehiculo{

}

export {Turismo, Motocicleta, Caravana};