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

    
}

let ticketServicio = new TicketServicio(ticketRepo);


export { ticketServicio };