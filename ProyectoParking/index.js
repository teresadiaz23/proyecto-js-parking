import * as readline from "readline-sync";
import { clienteServicio } from "./Servicios/cliente_servicio.js";
import { parkingServicio } from "./Servicios/parking_servicio.js";
import { ticketServicio } from "./Servicios/ticket_servicio.js";
import moment from 'moment';
import { abonadoServicio } from "./Servicios/abonado_servicio.js";
import { abonoRepositorio } from "./Repositorios/abono_repositorio.js";

let plazasT = parkingServicio.plazasLibresTurismo();
let plazasM = parkingServicio.plazasLibresMoto();
let plazasC = parkingServicio.plazasLibresCaravana();
let matricula = "";
let tipo = "";
let op = 0;
let op2 = 0;
let dni = "";
let pin = 0;
let id = 0;

console.log("Bienvenido al parking");


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
                        id = parseInt(readline.question('Introduce la identificador de la plaza: '));
                        pin = parseInt(readline.question('Introduce el pin del ticket: '));
                        let total = clienteServicio.retirarVehiculo(matricula, id, pin);
                        if(total >= 0){
                            console.log(`\nImporte a pagar: ${total}€`);
                            console.log("Puede retirar su vehículo");

                        }
                        else{
                            console.log("\nLos datos introducidos no son correctos");
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
            do {
                op2 = parseInt(readline.question(`\nPulse 1 para depositar un vehículo
Pulse 2 para retirar un vehículo
Pulse 3 para ver su abono
Pulse 0 para salir
`));
                switch (op2) {
                    case 1:
                        matricula = readline.question('Introduce la matrícula de su vehículo: ');
                        dni = readline.question('Introduce su dni: ');
                        if (abonadoServicio.depositarAbonados(matricula, dni)) {

                            console.log("\nEl vehículo se ha depositado correctamente");
                            
                        }
                        else {
                            console.log("\nNo se encuentra ningún cliente abonado con esos datos");
                        }

                        break;
                    case 2:
                        matricula = readline.question('Introduce la matrícula de su vehículo: ');
                        id = readline.question('Introduce el identificador de la plaza: ');
                        pin = readline.question('Introduce el pin: ');
                        if(abonadoServicio.retirarAbonados(matricula, id, pin)){
                            console.log("\nPuede retirar su vehículo");
                        }
                        else {
                            console.log("\nNo se encuentra ningún cliente abonado con esos datos o la plaza no está ocupada");
                        }

                        break;
                    case 3:
                        matricula = readline.question('Introduce la matrícula de su vehículo: ');
                        dni = readline.question('Introduce su dni: ');
                        if(abonadoServicio.verAbono(matricula, dni) !== undefined){
                            console.log(`\n${abonadoServicio.verAbono(matricula, dni)}`);
                        }
                        else{
                            console.log("\nNo existe ningún abono con esos datos");
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
        case 3:
            let password = readline.question("Introduce la contraseña: ");
            do {
                
            } while (op2 != 0);

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