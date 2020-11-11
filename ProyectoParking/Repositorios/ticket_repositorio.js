import {Ticket} from "../Modelos/ticket.js";

class TicketRepositorio{
    constructor(listaTicket=[]){
        this.listaTicket = listaTicket;
    }
}


let listaTickets = [new Ticket("1111BBB", new Date("2020/11/11 18:39:15"), 1, 111111)];
let ticketRepo = new TicketRepositorio(listaTickets);

export { ticketRepo };