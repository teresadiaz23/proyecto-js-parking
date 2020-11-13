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


let listaTickets = [new Ticket("1111BBB", moment("2020-11-11 21:00:00"), 1, 111111, moment("2020-11-11 22:00:00"), 10)];
let ticketRepo = new TicketRepositorio(listaTickets);

export { ticketRepo };