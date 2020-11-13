import { abonoServicio } from "../Servicios/abono_servicio.js";
import { adminServicio } from "../Servicios/administrador_servicio.js";

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
            abonoServicio.imprimirAbono(abonoServicio.findAll()[abonoServicio.findAll().length-1]);
        }
        else{
            console.log("\nError. No se ha podido generar correctamente")
        }
    }

    estadoParking(){
        return adminServicio.estadoParking();
    }

    facturacion(fecha1,fecha2){
        return adminServicio.facturacion(fecha1,fecha2);
    }

    consultaAbonados(){
        return adminServicio.consultaAbonados();
    }

    caducidadAbonosMes(){
        return adminServicio.caducidadAbonosMes(mes);
    }

}

let adminController = new AdminController();

export { adminController };