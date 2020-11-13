import { Parking } from "../Modelos/parking.js";
import {Plaza} from "../Modelos/plaza.js";
import {Turismo, Motocicleta, Caravana} from "../Modelos/vehiculo.js";
import { plazaRepo } from "./plaza_repositorio.js";
import { abonoServicio } from "../Servicios/abono_servicio.js";
import { ticketServicio } from "../Servicios/ticket_servicio.js";


class ParkingRepositorio{
    constructor(parking){
        this.parking = parking;

    }
    
    findAll(){
        return this.parking;
    }
}

let dineroTickets = [];
if(ticketServicio.findAll().length > 0){
    for (const ticket of ticketServicio.findAll()) {
        dineroTickets.push(ticket.coste);
    }
}

let dineroAbonos = [];
if(abonoServicio.findAll().length > 0){
    for (const abono of abonoServicio.findAll()) {
        dineroAbonos.push(abono.precio);
    }
}



let parking = new Parking(plazaRepo.listaPlazas, dineroTickets, dineroAbonos);


let parkingRepo = new ParkingRepositorio(parking);


export { parkingRepo };
