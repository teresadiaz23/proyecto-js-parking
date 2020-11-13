import { parkingServicio } from "../Servicios/parking_servicio.js";
import { ticketServicio } from "./ticket_servicio.js";
import moment from 'moment';
import { abonoRepositorio } from "../Repositorios/abono_repositorio.js";
import { ClienteAbonado } from "../Modelos/cliente_abonado.js";
import { Abono } from "../Modelos/abono.js";
import { Caravana, Motocicleta, Turismo } from "../Modelos/vehiculo.js";
import { abonadoServicio } from "./abonado_servicio.js";
import { abonadoRepositorio } from "../Repositorios/cliente_abonado_repositorio.js";
import { abonoServicio } from "../Servicios/abono_servicio.js";

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
        for (const abono of abonoServicio.findAll()) {
            //console.log(abono.tipo, abono.precio);
            cobro.push(abono.precio);
        }
        if(cobro.length > 0){
            const reducer = (acumulador, valor) => acumulador + valor;
            total = cobro.reduce(reducer);
        }
        let i = 1;
        if(abonoServicio.findAll().length > 0){
            for (const abono of abonoServicio.findAll()) {
                
                console.log(`\nAbono ${i++}\nTipo: ${abono.tipo}\nId Plaza: ${abono.clienteAbonado.idPlaza}
Fecha Activación: ${abono.fechaActivacion.date()}/${abono.fechaActivacion.month()+1}/${abono.fechaActivacion.year()}
Fecha Caducidad: ${abono.fechaCancelacion.date()}/${abono.fechaCancelacion.month()+1}/${abono.fechaCancelacion.year()}`);
            }
            
        }
        
        console.log(`\nTotal facturado: ${total.toFixed(2)} €`);
    
    }
    
    altaAbonos(dni, nombre, apellidos, numTarjeta, email, matricula, tipoVehiculo, tipoAbono){
        let vehiculo;
        let plaza;
        let abono;
        let id;
        let confirmado = true;
        
        if(tipoVehiculo.toLowerCase() == "turismo"){
            vehiculo = new Turismo(matricula);
            plaza = parkingServicio.plazasLibresTurismo()[0];
        }
        else if(tipoVehiculo.toLowerCase() == "motocicleta"){
            vehiculo = new Motocicleta(matricula);
            plaza = parkingServicio.plazasLibresMoto()[0];

        }
        else if(tipoVehiculo.toLowerCase() == "caravana"){
            vehiculo = new Caravana(matricula);
            plaza = parkingServicio.plazasLibresCaravana()[0];

        }
        else{
            confirmado = false;
            
        }
        
        if(plaza!== undefined){
            id = plaza.id;
        }
        
        let cliente = new ClienteAbonado(dni, nombre, apellidos, numTarjeta, email, vehiculo, tipoAbono, id);
        let pin = Math.floor(Math.random() * (999999 - 111111) + 111111);
        if(tipoAbono.toLowerCase() == "mensual"){
            abono = new Abono(pin, tipoAbono, moment(), moment().add(1, 'months'),cliente, 25);

        }
        else if(tipoAbono.toLowerCase() == "trimestral"){
            abono = new Abono(pin, tipoAbono, moment(), moment().add(3, 'months'),cliente, 70);
            
        }
        else if(tipoAbono.toLowerCase() == "semestral"){
            abono = new Abono(pin, tipoAbono, moment(), moment().add(6, 'months'),cliente, 130);
            
        }
        else if(tipoAbono.toLowerCase() == "anual"){
            abono = new Abono(pin, tipoAbono, moment(), moment().add(1, 'years'),cliente, 200);
            
        }
        else{
            confirmado = false;
        }

        if(confirmado){
            abonadoRepositorio.save(cliente);
            abonoServicio.save(abono);
            parkingServicio.findAll().totalDinero+=abono.precio;
        }


        return confirmado;

    
    }
    
    renovacionAbonos(dni, pin, tipoAbono){
        let modificado = false;
        let cliente = abonadoRepositorio.listaAbonados.find(cliente => cliente.dni == dni);
        let abono = abonoServicio.findAll().find(abono => abono.clienteAbonado == cliente);
        let abono2 = abonoServicio.findAll().find(abono => abono.pin == pin);
        
        if(abono === abono2 && abono !== undefined){
            if(tipoAbono.toLowerCase() == "mensual"){
                abono.fechaCancelacion = abono.fechaCancelacion.add(1,'months');
                abono.tipo = tipoAbono;
                cliente.abono = tipoAbono;
                abono.precio = 25;
                modificado = true;
            }
            else if(tipoAbono.toLowerCase() == "trimestral"){
                abono.fechaCancelacion = abono.fechaCancelacion.add(3,'months');
                abono.tipo = tipoAbono;
                cliente.abono = tipoAbono;
                abono.precio = 70;
                modificado = true;

            }
            else if(tipoAbono.toLowerCase() == "semestral"){
                abono.fechaCancelacion = abono.fechaCancelacion.add(6,'months');
                abono.tipo = tipoAbono;
                cliente.abono = tipoAbono;
                abono.precio = 130;
                modificado = true;

            }
            else if(tipoAbono.toLowerCase() == "anual"){
                abono.fechaCancelacion = abono.fechaCancelacion.add(1,'years');
                abono.tipo = tipoAbono;
                cliente.abono = tipoAbono;
                abono.precio = 200;
                modificado = true;

            }
           

        }

        parkingServicio.findAll().totalDinero.push(abono.precio);
        // console.log(parkingServicio.findAll().totalDinero);
        // console.log(abonoServicio.findAll());

        return modificado;
    
    }

    modificarDatosAbono(dni, pin, nombre, apellidos, numTarjeta, email){
        let modificado = false;
        let cliente = abonadoRepositorio.listaAbonados.find(cliente => cliente.dni == dni);
        let abono = abonoServicio.findAll().find(abono => abono.clienteAbonado == cliente);
        let abono2 = abonoServicio.findAll().find(abono => abono.pin == pin);
        if(abono === abono2 && abono !== undefined){
            if(nombre != ""){
                cliente.nombre = nombre;
                modificado = true;
            }
            if(apellidos != ""){
                cliente.apellidos = apellidos;
                modificado = true;
            }
            if(numTarjeta != ""){
                cliente.numTarjeta = numTarjeta;
                modificado = true;
            }

            if(email != ""){
                cliente.email = email;
                modificado = true;
            }
            
           
        }
        if(modificado){
            abono.clienteAbonado = cliente;
        }

        

        return modificado;


    }
    
    borradoAbonos(){
    
    }
    
    caducidadAbonosMes(mes){
        let abonos = [];
        for (const abono of abonoServicio.findAll()) {
            
            if(abono.fechaCancelacion.month()+1 == parseInt(mes)){
                abonos.push(abono);
            }
        }

        if(abonos.length > 0){
            let i = 1;
            for (const abono of abonos) {
                
                console.log(`\nAbono ${i++}\nTipo: ${abono.tipo}\nId Plaza: ${abono.clienteAbonado.idPlaza}
Fecha Activación: ${abono.fechaActivacion.date()}/${abono.fechaActivacion.month()+1}/${abono.fechaActivacion.year()}
Fecha Caducidad: ${abono.fechaCancelacion.date()}/${abono.fechaCancelacion.month()+1}/${abono.fechaCancelacion.year()}`);
            }
            
        }
        else{
            //console.log(abonoRepositorio.listaAbonos);
            console.log("No hay abonos que caduquen en el mes indicado");
        }
    }

    caducidadAbonos10Dias(){
        let abonos = [];
        for (const abono of abonoServicio.findAll()) {
            
            if(abono.fechaCancelacion.isBetween(moment(), moment().add(10, 'days'))){
                abonos.push(abono);
            }
        }
        if(abonos.length > 0){
            let i = 1;
            for (const abono of abonos) {
                
                console.log(`\nAbono ${i++}\nTipo: ${abono.tipo}\nId Plaza: ${abono.clienteAbonado.idPlaza}
Fecha Activación: ${abono.fechaActivacion.date()}/${abono.fechaActivacion.month()+1}/${abono.fechaActivacion.year()}
Fecha Caducidad: ${abono.fechaCancelacion.date()}/${abono.fechaCancelacion.month()+1}/${abono.fechaCancelacion.year()}`);
            }
            
        }
        else{
            //console.log(abonoRepositorio.listaAbonos);
            console.log("No hay abonos que caduquen en los próximos 10 días");
        }

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
//adminServicio.caducidadAbonos10Dias();
//console.log(adminServicio.altaAbonos("111111F", "Teresa", "Diaz", "1124141", "teresa@email.com", "2345HHH","turismo", "mensual"));
//console.log(abonadoRepositorio.listaAbonados);
//adminServicio.renovacionAbonos("12345678A", "semestral");
//adminServicio.modificarDatosAbono("12345678A", "Juan", null, null, "juan@email.com");

export { adminServicio };



