import { ticketRepo} from "../Repositorios/ticket_repositorio.js";

class TicketServicio{
    constructor(repo){
        this.repo = repo;
    }

    imprimirTicket(ticket){
        console.log(`*************************************`);
        console.log(`*              Ticket               *`);
        console.log(`*                                   *`);
        console.log(`*    Matrícula: ${ticket.matricula}             *`);
        console.log(`*    Fecha depósito: ${ticket.fechaDeposito.getDate()}/${ticket.fechaDeposito.getMonth()+1}/${ticket.fechaDeposito.getFullYear()}     *`);
        console.log(`*    Hora: ${ticket.fechaDeposito.getHours()}:${ticket.fechaDeposito.getMinutes()}:${ticket.fechaDeposito.getSeconds()}                 *`);
        console.log(`*    Id plaza: ${ticket.idPlaza}                    *`);
        console.log(`*    Pin: ${ticket.pin}                    *`);
        console.log(`*                                   *`);
        console.log(`*                                   *`);
        console.log(`*************************************`);
    }
}

let ticketServicio = new TicketServicio(ticketRepo);
// ticketServicio.imprimirTicket(ticketRepo.listaTicket[0]);

export { ticketServicio };