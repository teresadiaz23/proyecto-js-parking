import {Plaza} from "../Modelos/plaza.js";
import {Turismo, Motocicleta, Caravana} from "../Modelos/vehiculo.js";
import { plazaRepo } from "./plaza_repositorio.js";


class ParkingRepositorio{
    constructor(parking){
        this.parking = parking;

    }
}


let parking = new Parking(plazaRepo.listaPlazas);

let parkingRepo = new ParkingRepositorio(parking);

for (const plaza of parkingRepo.parking.listaPlazas) {
    console.log(plaza);
}

export { parkingRepo };
