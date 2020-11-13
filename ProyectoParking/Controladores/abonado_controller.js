import { abonadoServicio } from "../Servicios/abonado_servicio.js";
import { abonoServicio } from "../Servicios/abono_servicio.js";
import { adminServicio } from "../Servicios/administrador_servicio.js";

class AbonadoController{

    menuAbonado(){
        return `\nPulse 1 para depositar un vehículo
Pulse 2 para retirar un vehículo
Pulse 3 para ver su abono
Pulse 4 para ver sus datos personales
Pulse 5 para modificar datos personales
Pulse 6 para renovar su abono
Pulse 7 para borrar su abono
Pulse 0 para salir
`;
    }

    depositarAbonados(matricula, dni){
        if (abonadoServicio.depositarAbonados(matricula, dni)) {

            console.log("\nEl vehículo se ha depositado correctamente");

        }
        else {
            console.log("\nNo se encuentra ningún cliente abonado con esos datos");
        }
    }

    retirarAbonados(matricula, id, pin){
        if(abonadoServicio.retirarAbonados(matricula, id, pin)){
            console.log("\nPuede retirar su vehículo");
        }
        else {
            console.log("\nNo se encuentra ningún cliente abonado con esos datos o la plaza no está ocupada");
        }
    }

    obtenerAbono(dni, pin){
        if (abonadoServicio.obtenerAbono(dni, pin) !== undefined) {
            abonoServicio.imprimirAbono(abonadoServicio.obtenerAbono(dni, pin));
        }
        else {
            console.log("\nNo existe ningún abono con esos datos");
        }
    }

    obtenerDatosPesonales(dni, pin){
        if (abonadoServicio.obtenerDatosPersonales(dni, pin) !== undefined) {
                            
        }
        else {
            console.log("\nNo existe ningún abono con esos datos");
        }

    }

    modificarDatosAbono(dni, pin, nombre, apellidos, numTarjeta, email){
        if (adminServicio.modificarDatosAbono(dni, pin, nombre, apellidos, numTarjeta, email)) {
            console.log("\nLos datos se han modificado correctamente");
            abonadoServicio.obtenerDatosPersonales(dni, pin);
        }
        else {
            console.log("Error. Los datos no se han podido modificar");
        }

    }

    renovacionAbonos(dni, pin, tipoAbono){
        if (adminServicio.renovacionAbonos(dni, pin, tipoAbono)) {
            console.log("\nSu abono se ha renovado correctamente");
            abonoServicio.imprimirAbonoDni(dni, pin);
        }
        else {
            console.log("Error. Su abono no se ha podido renovar");
        }

    }

    borrarAbono(dni, pin){
        if(adminServicio.borradoAbono(dni, pin)){
            console.log("\nSe ha borrado correctamente");
        }
        else{
            console.log("\nError. No se ha podido borrar");
        }

    }

}

let abonadoController = new AbonadoController();

export { abonadoController };