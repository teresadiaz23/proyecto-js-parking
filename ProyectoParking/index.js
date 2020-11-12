import * as readline from "readline-sync";
import { clienteServicio } from "./Servicios/cliente_servicio.js";
import { parkingServicio } from "./Servicios/parking_servicio.js";
import { ticketServicio } from "./Servicios/ticket_servicio.js";
import moment from 'moment';
import { abonadoServicio } from "./Servicios/abonado_servicio.js";
import { abonoRepositorio } from "./Repositorios/abono_repositorio.js";
import { adminServicio } from "./Servicios/administrador_servicio.js";

let plazasT = parkingServicio.plazasLibresTurismo();
let plazasM = parkingServicio.plazasLibresMoto();
let plazasC = parkingServicio.plazasLibresCaravana();
let matricula = "";
let tipo = "";
let op = 0;
let op2 = 0;
let op3 = 0;
let dni = "";
let pin = 0;
let id = 0;
let fecha = "";
let fecha1 = undefined;
let fecha2 = undefined;

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
                            
                            ticketServicio.imprimirTicket(ticketServicio.repo.listaTicket[ticketServicio.repo.listaTicket.length-1]);
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
            if (adminServicio.comprobarPassword(password)) {
                do {
                    op2 = parseInt(readline.question(`\nPulse 1 para ver el estado del parking
Pulse 2 para ver la facturación entre dos fechas
Pulse 3 para consultar los abonados
Pulse 4 para la gestión de los abonos
Pulse 5 para ver los abonos que caducan en un mes específico
Pulse 6 para ver los abonos que caducan en los próximos 10 días
Pulse 0 para salir
`));
                    switch (op2) {
                        case 1:
                            adminServicio.estadoParking();

                            break;
                        case 2:
                            fecha = readline.question("Introduce la primera fecha y hora con el formato 'aaaa-mm-dd hh:mm': ");
                            fecha1 = moment(fecha);
                            fecha = readline.question("Introduce la segunda fecha y hora con el formato 'aaaa-mm-dd hh:mm': ");
                            fecha2 = moment(fecha);
                            console.log(`\nFacturación entre ${fecha1.date()}/${fecha1.month()}/${fecha1.year()} y el ${fecha2.date()}/${fecha2.month()}/${fecha2.year()}: ${adminServicio.facturacion(fecha1,fecha2)} €`);


                            break;
                        case 3:
                            adminServicio.consultaAbonados();

                            break;
                        case 4:
                            do {
                                switch (op3) {
                                    case 1:

                                        break;
                                    case 2:

                                        break;
                                    case 3:

                                        break;
                                    case 0:

                                        break;

                                    default:
                                        break;
                                }

                            } while (op3 != 0);


                            break;
                        case 5:
                            let mes = readline.question("Introduce un mes en número: ");
                            console.log("\nAbonos que caducan en ese mes:")
                            adminServicio.caducidadAbonosMes(mes);

                            break;
                        case 6:
                            console.log("\nAbonos que caducan en los próximos 10 días:")
                            adminServicio.caducidadAbonos10Dias();

                            break;
                        default:
                            break;
                    }

                } while (op2 != 0);

            }
            else{
                console.log("\nContraseña incorrecta");
            }
            
            

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