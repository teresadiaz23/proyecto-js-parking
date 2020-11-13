import { ticketRepo} from "../Repositorios/ticket_repositorio.js";
import moment from 'moment';

class TicketServicio{
    constructor(repo){
        this.repo = repo;
    }

    save(ticket){
        this.repo.save(ticket);
    }

    findAll(){
        return this.repo.findAll();
    }

    imprimirTicket(ticket){
        console.log(`*************************************`);
        console.log(`*              Ticket               *`);
        console.log(`*                                   *`);
        console.log(`*    Matrícula: ${ticket.matricula}             *`);
        console.log(`*    Fecha depósito: ${ticket.fechaDeposito.date()}/${ticket.fechaDeposito.month()+1}/${ticket.fechaDeposito.year()}     *`);
        console.log(`*    Hora: ${ticket.fechaDeposito.hours()}:${ticket.fechaDeposito.minutes()}:${ticket.fechaDeposito.seconds()}                 *`);
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