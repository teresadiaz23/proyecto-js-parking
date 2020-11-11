import { parkingRepo } from "../Repositorios/parking_repositorio.js";
import { Plaza } from "../Modelos/plaza.js";
import { Caravana, Motocicleta, Turismo } from "../Modelos/vehiculo.js";
import * as readline from "readline-sync";
import { Ticket } from "../Modelos/ticket.js";
import { ticketRepo } from '../Repositorios/ticket_repositorio.js';
import { parkingServicio } from "./parking_servicio.js";
import { ticketServicio } from "./ticket_servicio.js";

class ClienteServicio{
    constructor(){

    }
    depositarVehiculo(){
    
        let plazasT = parkingServicio.plazasLibresTurismo();
        let plazasM = parkingServicio.plazasLibresMoto();
        let plazasC = parkingServicio.plazasLibresCaravana();
        let plazaAsignada = new Plaza();
       
        // console.log(`Hay ${plazasT.length} plazas de turismos, ${plazasM.length} plazas de motocicletas y ${plazasC.length}
        //  plazas de caravanas libres`);
        parkingServicio.imprimirPlazasLibres(plazasT, plazasM, plazasC);
        let matricula = readline.question('Introduce la matrícula de su vehículo: ');
        let tipo = readline.question('Introduce el tipo de vehículo: ');
        let vehiculo;
        if(tipo.toLowerCase() == "turismo"){
            if(plazasT.length > 0){
                //vehiculo = new Turismo(0.12);
                plazaAsignada=plazasT[0];
                plazasT[0].ocupada = true;
            }
            

        }else if(tipo.toLowerCase() == "motocicleta"){
            if(plazasM.length > 0){
                //vehiculo = new Motocicleta(0.08);
                plazaAsignada = plazasM[0];
                plazasM[0] = true;
            }
            

        }else if(tipo.toLowerCase() == "caravana"){
            if(plazasC.length > 0){
                //vehiculo = new Caravana(0.45);
                plazaAsignada = plazasC[0];
                plazasC[0].ocupada = true;
            }
            

        }
        else{
            console.log("Ese vehículo no es válido");
        }
        let pin = Math.floor(Math.random() * (999999 - 111111) + 111111);        
        
        let ticket = new Ticket(matricula, new Date(), plazaAsignada.id, pin);
        ticketServicio.imprimirTicket(ticket);
        ticketRepo.listaTicket.push(ticket);
    
    }
    
    retirarVehiculo(){
        
    }

}

let clienteServicio = new ClienteServicio();

clienteServicio.depositarVehiculo();

