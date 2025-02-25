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
            
            

        }else if(tipo.toLowerCase() == "motocicleta"){
            if(plazasM.length > 0){
                plazaAsignada = plazasM[0];
                plazasM[0] = true;
                depositado = true;
            }
            
            

        }else if(tipo.toLowerCase() == "caravana"){
            if(plazasC.length > 0){
                plazaAsignada = plazasC[0];
                plazasC[0].ocupada = true;
                depositado = true;
            }
            
            

        }
        
        
        if(depositado){
            let pin = Math.floor(Math.random() * (999999 - 111111) + 111111);   
        
            let ticket = new Ticket(matricula, moment(), plazaAsignada.id, pin);
            ticketServicio.save(ticket);
            
        }
        
        

        return depositado;
    
    }
    
    retirarVehiculo(matricula, id, pin){
        let ticket  = ticketServicio.findAll().find(ticket => ticket.pin === pin);
        let ticket2 = ticketServicio.findAll().find(ticket => ticket.matricula === matricula);
        let plaza = parkingServicio.findAll().plazas.find(plaza => plaza.id === id);
        let total = -1;
        if(ticket === ticket2 && ticket !== undefined && plaza !== undefined){
            let hoy = moment();
            let tiempo = hoy.diff(ticket.fechaDeposito, 'minutes');
            
            total = tiempo * plaza.tarifa; 
            
            ticket.fechaSalida = hoy;
            ticket.coste = total;
            parkingServicio.findAll().dineroTickets.push(total);
           
            plaza.ocupada = false;
        }
        
        return total.toFixed(2);
       
       

    }

}

let clienteServicio = new ClienteServicio();

export { clienteServicio };

