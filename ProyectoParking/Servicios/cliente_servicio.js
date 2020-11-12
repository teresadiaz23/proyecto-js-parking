import { parkingRepo } from "../Repositorios/parking_repositorio.js";
import { Plaza } from "../Modelos/plaza.js";
import { Caravana, Motocicleta, Turismo } from "../Modelos/vehiculo.js";
import * as readline from "readline-sync";
import { Ticket } from "../Modelos/ticket.js";
import { ticketRepo } from '../Repositorios/ticket_repositorio.js';
import { parkingServicio } from "./parking_servicio.js";
import { ticketServicio } from "./ticket_servicio.js";
import moment from 'moment';

class ClienteServicio{
    constructor(){

    }
    depositarVehiculo(matricula, tipo, plazasT, plazasM, plazasC){
    
        let plazaAsignada = new Plaza();
        let depositado = false;
       
        if(tipo.toLowerCase() == "turismo"){
            if(plazasT.length > 0){
                plazaAsignada=plazasT[0];
                plazasT[0].ocupada = true;
                depositado = true;
            }
            // else{
            //     depositado = false;
            // }
            

        }else if(tipo.toLowerCase() == "motocicleta"){
            if(plazasM.length > 0){
                plazaAsignada = plazasM[0];
                plazasM[0] = true;
                depositado = true;
            }
            // else{
            //     depositado = false;
            // }
            

        }else if(tipo.toLowerCase() == "caravana"){
            if(plazasC.length > 0){
                plazaAsignada = plazasC[0];
                plazasC[0].ocupada = true;
                depositado = true;
            }
            // else{
            //     depositado = false;
            // }
            

        }
        // else{
        //     console.log("Ese vehículo no es válido");
        // }
        
        if(depositado){
            let pin = Math.floor(Math.random() * (999999 - 111111) + 111111);
            console.log(`Pin: ${pin}`);       
        
            let ticket = new Ticket(matricula, moment(), plazaAsignada.id, pin);
            ticketRepo.listaTicket.push(ticket);
            // console.log(ticket);
            // ticketServicio.imprimirTicket(ticketServicio.repo.listaTicket[1]);
        }
        
        

        return depositado;
    
    }
    
    retirarVehiculo(matricula, id, pin){
        let ticket  = ticketServicio.repo.listaTicket.find(ticket => ticket.pin === pin);
        let plaza = parkingServicio.repo.parking.plazas.find(plaza => plaza.id === id);
        let total = -1;
        if(ticket !== undefined && plaza !== undefined){
            let hoy = moment();
            let tiempo = hoy.diff(ticket.fechaDeposito, 'minutes');
            //console.log(tiempo);
            total = tiempo * plaza.tarifa; 
            //console.log(total.toFixed(2));
            ticket.fechaSalida = hoy;
            ticket.coste = total;

            //console.log(ticket);
            parkingServicio.repo.parking.totalDinero.push(total);
            //console.log(parkingServicio.repo.parking.totalDinero);
            plaza.ocupada = false;
        }
        
        //console.log(plaza);

        return total.toFixed(2);
       
       

    }

}

let clienteServicio = new ClienteServicio();

// clienteServicio.depositarVehiculo("matricula", "turismo", parkingServicio.plazasLibresTurismo(),
//                         parkingServicio.plazasLibresMoto(), parkingServicio.plazasLibresCaravana())
// clienteServicio.retirarVehiculo("1111BBB",1,111111);

export { clienteServicio };

