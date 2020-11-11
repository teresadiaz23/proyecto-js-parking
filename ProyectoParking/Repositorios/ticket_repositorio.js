import {Ticket} from "../Modelos/ticket.js";
import moment from 'moment';

class TicketRepositorio{
    constructor(listaTicket=[]){
        this.listaTicket = listaTicket;
    }
}


let listaTickets = [new Ticket("1111BBB", moment("2020-11-11 21:00:00"), 1, 111111)];
let ticketRepo = new TicketRepositorio(listaTickets);

export { ticketRepo };