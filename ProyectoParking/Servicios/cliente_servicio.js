// import { parkingRepo } from "../Repositorios/parking_repositorio.js";
// import { Plaza } from "../Modelos/plaza.js";
// import { Motocicleta, Turismo } from "../Modelos/vehiculo.js";
import * as readline from 'readline-sync';
import { Ticket } from "../Modelos/ticket.js";
import { ticketRepo } from '../Repositorios/ticket_repositorio.js';

function depositarVehiculo(){
    let plazasT = [];
    let plazasM = [];
    let plazasC = [];
    // for (let i = 0; i < parkingRepo.parking.listaPlazas.length; i++) {
    //     if(parkingRepo.parking.listaPlazas[i].vehiculo instanceof Turismo){
    //         if(parkingRepo.parking.listaPlazas[i].ocupada == false){
    //             plazasT.push(parkingRepo.parking.listaPlazas[i]);
    //         }
            
    //     }
    //     else if(parkingRepo.parking.listaPlazas[i].vehiculo instanceof Motocicleta){
    //         if(parkingRepo.parking.listaPlazas[i].ocupada == false){
    //             plazasM.push(parkingRepo.parking.listaPlazas[i]);
    //         }
            
    //     }
    //     else{
    //         if(parkingRepo.parking.listaPlazas[i].ocupada == false){
    //             plazasC.push(parkingRepo.parking.listaPlazas[i]);
    //         }
            
    //     }
        
    // }
    // console.log(`Hay ${plazasT.length} plazas de turismos, ${plazasM.length} plazas de motocicletas y ${plazasC.length}
    //  plazas de caravanas libres`);
    let matricula = readline.question('Introduce la matrícula de su vehículo: ');
    let tipo = readline.question('Introduce el tipo de vehículo: ');
    let pin = Math.floor(Math.random() * (999999 - 111111) + 111111);
    console.log(matricula);
    console.log(tipo);
    
    let ticket = new Ticket(matricula, new Date(), 1, pin);
    console.log(`Su ticket es: ${ticket}`);
    ticketRepo.listaTicket.push(ticket);
    //console.log(ticketRepo);
    

}

function retirarVehiculo(){
    
}

depositarVehiculo();