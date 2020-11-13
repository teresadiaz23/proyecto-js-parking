import { clienteServicio } from "../Servicios/cliente_servicio.js";
import { ticketServicio } from "../Servicios/ticket_servicio.js";
import { parkingController } from "./parking_controller.js";

class ClienteController{

    menuCliente(){
        return `\nPulse 1 para depositar un vehículo
Pulse 2 para retirar un vehículo
Pulse 3 para obtener un abono
Pulse 0 para salir
`;
    }

    depositarVehiculo(matricula, tipo, plazasT, plazasM, plazasC){
        
        if (clienteServicio.depositarVehiculo(matricula, tipo, plazasT, plazasM, plazasC)) {
            console.log("");

            parkingController.imprimirTicket(ticketServicio.findAll()[ticketServicio.findAll().length - 1]);

            console.log("Su vehículo ha sido depositado correctamente");

        }
        else {
            console.log("Los datos introducidos no son correctos")
        }
    }

    retirarVehiculo(matricula, id, pin){
        let total = clienteServicio.retirarVehiculo(matricula, id, pin);
        if (total >= 0) {
            console.log(`\nImporte a pagar: ${total}€`);
            console.log("Puede retirar su vehículo");

        }
        else {
            console.log("\nLos datos introducidos no son correctos");
        }

    }

}

let clienteController = new ClienteController();

export { clienteController };