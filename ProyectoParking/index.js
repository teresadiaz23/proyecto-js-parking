import * as readline from "readline-sync";
import { clienteServicio } from "./Servicios/cliente_servicio.js";
import { parkingServicio } from "./Servicios/parking_servicio.js";
import { ticketServicio } from "./Servicios/ticket_servicio.js";
import moment from 'moment';

let plazasT = parkingServicio.plazasLibresTurismo();
let plazasM = parkingServicio.plazasLibresMoto();
let plazasC = parkingServicio.plazasLibresCaravana();
let matricula = "";
let tipo = "";
let op = 0;
let op2 = 0;

console.log("Bienvenido al parking");
console.log(plazasT.length, plazasM.length, plazasC.length);

do {  

    op = parseInt(readline.question(`\nPulse 1 si eres cliente normal
Pulse 2 si eres cliente abonado
Pulse 3 si eres administrador
Pulse 0 para salir
`));
    switch (op) {
        case 1:
            do {
                op2 = parseInt(readline.question(`\nPulse 1 para depositar un vehículo
Pulse 2 para retirar un vehículo
Pulse 0 para salir
`));
                switch (op2) {
                    case 1:
                        console.log("");
                        parkingServicio.imprimirPlazasLibres(parkingServicio.plazasLibresTurismo(),
                         parkingServicio.plazasLibresMoto(), parkingServicio.plazasLibresCaravana());
                        matricula = readline.question('Introduce la matrícula de su vehículo: ');
                        tipo = readline.question('Introduce el tipo de vehículo (turismo, motocicleta o caravana): ');
                        if (clienteServicio.depositarVehiculo(matricula, tipo, parkingServicio.plazasLibresTurismo(),
                        parkingServicio.plazasLibresMoto(), parkingServicio.plazasLibresCaravana())) {
                            console.log("");
                            
                            //ticketServicio.imprimirTicket(ticketServicio.repo.listaTicket[ticketServicio.repo.listaTicket.length-1]);
                            //console.log(ticketServicio.repo.listaTicket);
                            console.log("Su vehículo ha sido depositado correctamente");

                        }
                        else{
                            console.log("Los datos introducidos no son correctos")
                        }

                        break;
                    case 2:
                        matricula = readline.question('Introduce la matrícula de su vehículo: ');
                        let id = parseInt(readline.question('Introduce la identificador de la plaza: '));
                        let pin = parseInt(readline.question('Introduce el pin del ticket: '));
                        let total = clienteServicio.retirarVehiculo(matricula, id, pin);
                        if(total >= 0){
                            console.log(`\nImporte a pagar: ${total}€`);
                            console.log("Puede retirar su vehículo");

                        }
                        else{
                            console.log("Los datos introducidos no son correctos");
                        }
                        
                        break;
                    case 0:
                        console.log("Saliendo al menú principal");
                        break;

                    default:
                        console.log("Esa opción no está disponible");
                        break;
                }
                
            } while (op2 != 0);
            

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
            console.log("Saliendo...");
            break;

        default:
            console.log("Esa opción no está disponible");
            break;
    }

} while (op != 0);
   


console.log("Gracias por usar el parking");