class Vehiculo{
    constructor(matricula){
        
        this.matricula = matricula;
    }
}

class Turismo extends Vehiculo{
    constructor(matricula){
        super(matricula);
        this.tarifa = 0.12;
        
    }


}

class Motocicleta extends Vehiculo{
    constructor(matricula){
        super(matricula);
        this.tarifa = 0.08;
        
    }

}

class Caravana extends Vehiculo{
    constructor(matricula){
        super(matricula);
        this.tarifa = 0.45;
        
    }

}

export {Turismo, Motocicleta, Caravana};