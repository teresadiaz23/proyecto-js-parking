import { abonoServicio } from "../Servicios/abono_servicio.js";
import { adminServicio } from "../Servicios/administrador_servicio.js";
import moment from 'moment';
import { parkingServicio } from "../Servicios/parking_servicio.js";
import { parkingController } from "./parking_controller.js";

class AdminController{

    menuAdmin(){
        return `\nPulse 1 para ver el estado del parking
Pulse 2 para ver la facturación entre dos fechas
Pulse 3 para consultar los abonados
Pulse 4 para ver los abonos que caducan en un mes específico
Pulse 5 para ver los abonos que caducan en los próximos 10 días
Pulse 0 para salir
`;
    }

    altaAbono(dni, nombre, apellidos, numTarjeta, email, matricula, tipoVehiculo, tipoAbono){
        if(adminServicio.altaAbonos(dni, nombre, apellidos, numTarjeta, email, matricula, tipoVehiculo, tipoAbono)){
            console.log("\nHa obtenido un abono correctamente");
            parkingController.imprimirAbono(abonoServicio.findAll()[abonoServicio.findAll().length-1]);
        }
        else{
            console.log("\nError. No se ha podido generar correctamente")
        }
    }

    estadoParking(){
        let listaPlazas = parkingServicio.findAll().plazas;

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

    facturacion(fecha1,fecha2){
        console.log(`\nFacturación entre ${fecha1.date()}/${fecha1.month()+1}/${fecha1.year()} ${fecha1.hours()}:${fecha1.minutes()}h y el ${fecha2.date()}/${fecha2.month()+1}/${fecha2.year()} ${fecha2.hours()}:${fecha2.minutes()}h --> ${adminServicio.facturacion(fecha1,fecha2)} €`);

    }

    consultaAbonados(){
        let i = 1;
        if(abonoServicio.findAll().length > 0){
            for (const abono of abonoServicio.findAll()) {
                
                console.log(`\nAbono ${i++}\nTipo: ${abono.tipo}\nId Plaza: ${abono.clienteAbonado.idPlaza}
Fecha Activación: ${abono.fechaActivacion.date()}/${abono.fechaActivacion.month()+1}/${abono.fechaActivacion.year()}
Fecha Caducidad: ${abono.fechaCancelacion.date()}/${abono.fechaCancelacion.month()+1}/${abono.fechaCancelacion.year()}
Precio: ${abono.precio} €`);
            }
            
        }
        console.log(`\nTotal facturado con los abonos: ${adminServicio.consultaAbonados()} €`);
         
    }

    caducidadAbonosMes(mes){
        let abonos = adminServicio.caducidadAbonosMes(mes);
        if(abonos.length > 0){
            let i = 1;
            for (const abono of abonos) {
                
                console.log(`\nAbono ${i++}\nTipo: ${abono.tipo}\nId Plaza: ${abono.clienteAbonado.idPlaza}
Fecha Activación: ${abono.fechaActivacion.date()}/${abono.fechaActivacion.month()+1}/${abono.fechaActivacion.year()}
Fecha Caducidad: ${abono.fechaCancelacion.date()}/${abono.fechaCancelacion.month()+1}/${abono.fechaCancelacion.year()}
Precio: ${abono.precio} €`);
            }
            
        }
        else{
            
            console.log("No hay abonos que caduquen en el mes indicado");
        }
      
    }

    caducidadAbonosProximos10Dias(){
        let abonos = adminServicio.caducidadAbonos10Dias();
        if(abonos.length > 0){
            let i = 1;
            for (const abono of abonos) {
                
                console.log(`\nAbono ${i++}\nTipo: ${abono.tipo}\nId Plaza: ${abono.clienteAbonado.idPlaza}
Fecha Activación: ${abono.fechaActivacion.date()}/${abono.fechaActivacion.month()+1}/${abono.fechaActivacion.year()}
Fecha Caducidad: ${abono.fechaCancelacion.date()}/${abono.fechaCancelacion.month()+1}/${abono.fechaCancelacion.year()}
Precio: ${abono.precio} €`);
            }
            
        }
        else{
            
            console.log("No hay abonos que caduquen en los próximos 10 días");
        }
        
    }

}

let adminController = new AdminController();

export { adminController };