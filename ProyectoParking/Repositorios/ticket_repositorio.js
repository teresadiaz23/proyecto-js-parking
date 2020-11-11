import {Ticket} from "../Modelos/ticket.js";

class TicketRepositorio{
    constructor(listaTicket){
        this.listaTicket = listaTicket;
    }
}


let listaTickets = [];
let ticketRepo = new TicketRepositorio(listaTickets);

export { ticketRepo };