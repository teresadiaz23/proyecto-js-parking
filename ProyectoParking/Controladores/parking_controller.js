import { abonadoRepositorio } from "../Repositorios/cliente_abonado_repositorio.js";
import { abonoServicio } from "../Servicios/abono_servicio.js";

class ParkingController{

    plazasLibres(a,b,c){
        
        console.log(`Hay ${a.length} plazas de turismos, ${b.length} plazas de motocicletas y ${c.length} plazas de caravanas libres`);
        
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

    imprimirAbono(abono){
        
        console.log(`\nAbono\nTipo: ${abono.tipo}\nPin: ${abono.pin}\nId Plaza: ${abono.clienteAbonado.idPlaza}
Fecha Activación: ${abono.fechaActivacion.date()}/${abono.fechaActivacion.month()+1}/${abono.fechaActivacion.year()}
Fecha Caducidad: ${abono.fechaCancelacion.date()}/${abono.fechaCancelacion.month()+1}/${abono.fechaCancelacion.year()}
Precio: ${abono.precio} €`);
            
    }
    imprimirAbonoDni(dni, pin){
        
        let cliente = abonadoRepositorio.listaAbonados.find(cliente => cliente.dni === dni);
        let abono = abonoServicio.findAll().find(abono => abono.clienteAbonado === cliente);
        let abono2 = abonoServicio.findAll().find(abono => abono.pin == pin);
        
        if(abono === abono2 && abono !== undefined){
            console.log(`\nAbono\nTipo: ${abono.tipo}\nPin: ${abono.pin}\nId Plaza: ${abono.clienteAbonado.idPlaza}
Fecha Activación: ${abono.fechaActivacion.date()}/${abono.fechaActivacion.month()+1}/${abono.fechaActivacion.year()}
Fecha Caducidad: ${abono.fechaCancelacion.date()}/${abono.fechaCancelacion.month()+1}/${abono.fechaCancelacion.year()}
Precio: ${abono.precio} €`);
        }
        
            
    }

}

let parkingController = new ParkingController();

export { parkingController };