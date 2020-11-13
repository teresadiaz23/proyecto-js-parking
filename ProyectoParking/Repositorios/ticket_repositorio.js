import {Ticket} from "../Modelos/ticket.js";
import moment from 'moment';

class TicketRepositorio{
    constructor(listaTicket=[]){
        this.listaTicket = listaTicket;
    }

    save(ticket){
        this.listaTicket.push(ticket);
    }
    findAll(){
        return this.listaTicket;
    }
}


let ticketRepo = new TicketRepositorio();

export { ticketRepo };