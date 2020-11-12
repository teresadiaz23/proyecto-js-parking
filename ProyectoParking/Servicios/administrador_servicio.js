import { parkingServicio } from "../Servicios/parking_servicio.js";
import { ticketServicio } from "./ticket_servicio.js";
import moment from 'moment';
import { abonoRepositorio } from "../Repositorios/abono_repositorio.js";

class AdminServicio{

    comprobarPassword(password){
        let correcto = false;
        if(password === "1234"){
            correcto = true;
        }

        return correcto;
    }


    estadoParking(){
        let listaPlazas = parkingServicio.repo.parking.plazas;

        for (const plaza of listaPlazas) {
            if (plaza.ocupada == false && plaza.cliente === null) {
                console.log(`ID: ${plaza.id} -> vehículo: ${plaza.tipoVehiculo} -> Estado: Libre`);
            }
            else if (plaza.ocupada == true && plaza.cliente === null) {
                console.log(`ID: ${plaza.id} -> vehículo: ${plaza.tipoVehiculo} -> Estado: Ocupada`);
            }
            else if (plaza.ocupada == false && plaza.cliente !== null) {
                console.log(`ID: ${plaza.id} -> vehículo: ${plaza.tipoVehiculo} -> Estado: Abono Libre`);
            }
            else if (plaza.ocupada == true && plaza.cliente !== null) {
                console.log(`ID: ${plaza.id} -> vehículo: ${plaza.tipoVehiculo} -> Estado: Abono Ocupada`);
            }
        }

    }
    
    facturacion(fecha1, fecha2){
        let total = 0;
        let coste = [];
        for (const ticket of ticketServicio.repo.listaTicket) {
            if(ticket.fechaSalida.isBetween(fecha1, fecha2)){
                coste.push(ticket.coste);

            }
            
        }
        if(coste.length > 0){
            const reducer = (acumulador, valor) => acumulador + valor;
            total = coste.reduce(reducer);
        }
        
        return total.toFixed(2);
    
    }
    
    consultaAbonados(){
        let cobro = [];
        let total = 0;
        for (const abono of abonoRepositorio.listaAbonos) {
            //console.log(abono.tipo, abono.precio);
            cobro.push(abono.precio);
        }
        const reducer = (acumulador, valor) => acumulador + valor;
        total = cobro.reduce(reducer);
        console.log(`\nHay ${abonoRepositorio.listaAbonos.length} abonos cobrados`);
    
    }
    
    altaAbonos(){
    
    }
    
    modificacionAbonos(){
    
    }
    
    borradoAbonos(){
    
    }
    
    caducidadAbonosMes(mes){
        let abonos = [];
        for (const abono of abonoRepositorio.listaAbonos) {
            
            if(abono.fechaCancelacion.month()+1 == parseInt(mes)){
                abonos.push(abono);
            }
        }

        if(abonos.length > 0){
            for (const abono of abonos) {
                let i = 1;
                console.log(`\nAbono ${i++}\nTipo: ${abono.tipo}\nId Plaza: ${abono.clienteAbonado.idPlaza}
Fecha Activación: ${abono.fechaActivacion.date()}/${abono.fechaActivacion.month()+1}/${abono.fechaActivacion.year()}
Fecha Caducidad: ${abono.fechaActivacion.date()}/${abono.fechaActivacion.month()+1}/${abono.fechaActivacion.year()}`);
            }
            
        }
        else{
            //console.log(abonoRepositorio.listaAbonos);
            console.log("No hay abonos que caduquen en el mes indicado");
        }
    }

    caducidadAbonos10Dias(){

    }

}

let adminServicio = new AdminServicio();

//adminServicio.estadoParking();
// console.log(adminServicio.facturacion(moment("2020-11-11 20:00"), moment("2020-11-12 20:00")));
// let fecha1 = moment("2020-11-11 20:00");
// let fecha2 =  moment("2020-11-12 20:00");
// console.log(`Facturación entre ${fecha1.date()}/${fecha1.month()}/${fecha1.year()} y el ${fecha2.date()}/${fecha2.month()}/${fecha2.year()}: ${adminServicio.facturacion(fecha1,fecha2)} €`);
//adminServicio.consultaAbonados();
//adminServicio.caducidadAbonosMes(12);
export { adminServicio };



