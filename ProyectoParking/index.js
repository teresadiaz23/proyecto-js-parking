import * as readline from "readline-sync";
import { clienteServicio } from "./Servicios/cliente_servicio.js";
import { parkingServicio } from "./Servicios/parking_servicio.js";
import { ticketServicio } from "./Servicios/ticket_servicio.js";

let plazasT = parkingServicio.plazasLibresTurismo();
let plazasM = parkingServicio.plazasLibresMoto();
let plazasC = parkingServicio.plazasLibresCaravana();
// let matricula = "";
// let tipo = "";

console.log("Bienvenido al parking");




let op = parseInt(readline.question(`Pulse 1 si eres cliente normal
Pulse 2 si eres cliente abonado
Pulse 3 si eres administrador
Pulse 0 para salir
`));
switch (op) {
    case 1:
        let op2 = parseInt(readline.question(`\nPulse 1 para depositar un vehículo
Pulse 2 para retirar un vehículo
Pulse 0 para salir
`));
        switch (op2) {
            case 1:
                parkingServicio.imprimirPlazasLibres(plazasT, plazasM, plazasC);
                let matricula = readline.question('Introduce la matrícula de su vehículo: ');
                let tipo = readline.question('Introduce el tipo de vehículo: ');
                if(clienteServicio.depositarVehiculo(matricula, tipo, plazasT, plazasM, plazasC)){
                    console.log("");
                    ticketServicio.imprimirTicket(ticketServicio.repo.listaTicket[ticketServicio.repo.listaTicket.length-1]);
                    console.log(ticketServicio.repo.listaTicket);
                    console.log("Su vehículo ha sido depositado correctamente");
                    
                }

                break;
            case 2:

                break;
            case 0:
                console.log("Saliendo...");
                break;
        
            default:
                console.log("Esa opción no está disponible");
                break;
        }

        break;
    case 2:
        op2 = parseInt(readline.question(`\nPulse 1 para depositar un vehículo
Pulse 2 para retirar un vehículo
Pulse 0 para salir
`));
        switch (op2) {
            case 1:
                
                break;
            case 2:

                break;
            case 0:
                console.log("Saliendo...");
                break;

            default:
                console.log("Esa opción no está disponible");
                break;
        }

        break;
    case 3:
        let password = readline.question("Introduce la contraseña: ");

        break;
    case 0:
        console.log("Saliendo...\nGracias por usar el parking");
        break;

    default:
        console.log("Esa opción no está disponible");
        break;
}