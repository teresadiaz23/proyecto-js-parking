import { Parking } from "../Modelos/parking.js";
import {Plaza} from "../Modelos/plaza.js";
import {Turismo, Motocicleta, Caravana} from "../Modelos/vehiculo.js";
import { plazaRepo } from "./plaza_repositorio.js";
import { abonoServicio } from "../Servicios/abono_servicio.js";


class ParkingRepositorio{
    constructor(parking){
        this.parking = parking;

    }
    
    findAll(){
        return this.parking;
    }
}

let dinero = [];
if(abonoServicio.findAll().length > 0){
    for (const abono of abonoServicio.findAll()) {
        dinero.push(abono.precio);
    }
}


let parking = new Parking(plazaRepo.listaPlazas, dinero);


let parkingRepo = new ParkingRepositorio(parking);


export { parkingRepo };
