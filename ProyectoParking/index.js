import * as readline from "readline-sync";
import { clienteServicio } from "./Servicios/cliente_servicio.js";
import { parkingServicio } from "./Servicios/parking_servicio.js";
import { ticketServicio } from "./Servicios/ticket_servicio.js";
import moment from 'moment';
import { abonadoServicio } from "./Servicios/abonado_servicio.js";
import { abonoRepositorio } from "./Repositorios/abono_repositorio.js";
import { adminServicio } from "./Servicios/administrador_servicio.js";
import { abonoServicio } from "./Servicios/abono_servicio.js";
import { mainController } from "./Controladores/main_controller.js";
import { clienteController } from "./Controladores/cliente_controller.js";
import { abonadoController } from "./Controladores/abonado_controller.js";
import { adminController } from "./Controladores/admin_controller.js";
import { parkingController } from "./Controladores/parking_controller.js";
import { abonadoRepositorio } from "./Repositorios/cliente_abonado_repositorio.js";

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
let nombre = "", apellidos = "", email = "", tipoAbono = "", tipoVehiculo = "", numTarjeta = "";

console.log("Bienvenido al parking robotizado");


do {  

    op = parseInt(readline.question(mainController.menuPrincipal()));
    switch (op) {
        case 1:
            do {
                op2 = parseInt(readline.question(clienteController.menuCliente()));
                switch (op2) {
                    case 1:
                        console.log("");
                        parkingController.plazasLibres(parkingServicio.plazasLibresTurismo(),
                         parkingServicio.plazasLibresMoto(), parkingServicio.plazasLibresCaravana());
                        matricula = readline.question('Introduce la matrícula de su vehículo: ');
                        tipo = readline.question('Introduce el tipo de vehículo (turismo, motocicleta o caravana): ');
                        
                        clienteController.depositarVehiculo(matricula, tipo, parkingServicio.plazasLibresTurismo(),
                         parkingServicio.plazasLibresMoto(), parkingServicio.plazasLibresCaravana());

                        break;
                    case 2:
                        matricula = readline.question('Introduce la matrícula de su vehículo: ');
                        id = parseInt(readline.question('Introduce la identificador de la plaza: '));
                        pin = parseInt(readline.question('Introduce el pin del ticket: '));
                        
                        clienteController.retirarVehiculo(matricula, id, pin);
                        
                        break;
                    case 3:
                        dni = readline.question('Introduce su dni: ');
                        nombre = readline.question('Introduce su nombre: ');
                        apellidos = readline.question('Introduce sus apellidos: ');
                        numTarjeta = readline.question('Introduce un número de tarjeta bancaria: ');
                        email = readline.question('Introduce su email: ');
                        matricula = readline.question('Introduce la matrícula de su vehículo: ');
                        tipoVehiculo = readline.question('Introduce el tipo de su vehículo(turismo, motocicleta o caravana): ');
                        tipoAbono = readline.question('Introduce el tipo del abono(mensual, trimestral, semestral o anual): ');
                        
                        adminController.altaAbono(dni, nombre, apellidos, numTarjeta, email, matricula, tipoVehiculo, tipoAbono);
                        
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
                op2 = parseInt(readline.question(abonadoController.menuAbonado()));
                switch (op2) {
                    case 1:
                        matricula = readline.question('Introduce la matrícula de su vehículo: ');
                        dni = readline.question('Introduce su dni: ');
                        
                        abonadoController.depositarAbonados(matricula, dni);

                        break;
                    case 2:
                        matricula = readline.question('Introduce la matrícula de su vehículo: ');
                        id = readline.question('Introduce el identificador de la plaza: ');
                        pin = readline.question('Introduce el pin: ');
                        
                        abonadoController.retirarAbonados(matricula, id, pin);

                        break;
                    case 3:
                        
                        dni = readline.question('Introduce su dni: ');
                        pin = readline.question('Introduce su pin: ');
                        
                        abonadoController.obtenerAbono(dni, pin);


                        break;
                    case 4:
                        dni = readline.question('Introduce su dni: ');
                        pin = readline.question('Introduce su pin: ');
                        
                        abonadoController.obtenerDatosPesonales(dni, pin);
                        
                        break;
                    case 5:
                        
                        dni = readline.question('Introduce su dni: ');
                        pin = readline.question('Introduce su pin: ');
                        console.log("A continuación introduce los datos que quiera modificar");
                        nombre = readline.question('Introduce su nombre: ');
                        apellidos = readline.question('Introduce sus apellidos: ');
                        numTarjeta = readline.question('Introduce un número de tarjeta bancaria: ');
                        email = readline.question('Introduce su email: ');
                        
                        abonadoController.modificarDatosAbono(dni, pin, nombre, apellidos, numTarjeta, email);

                        break;
                    case 6:
                        dni = readline.question('Introduce su dni: ');
                        pin = readline.question('Introduce su pin: ');
                        tipoAbono = readline.question('Introduce el tipo del abono a renovar(mensual, trimestral, semestral o anual): ');
                        
                        abonadoController.renovacionAbonos(dni, pin, tipoAbono);

                        break;
                    case 7:
                        dni = readline.question('Introduce su dni: ');
                        pin = readline.question('Introduce su pin: ');
                        
                        abonadoController.borrarAbono(dni, pin);

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
                    op2 = parseInt(readline.question(adminController.menuAdmin()));
                    switch (op2) {
                        case 1:
                            
                            adminController.estadoParking();

                            break;
                        case 2:
                            fecha = readline.question("Introduce la primera fecha y hora con el formato 'aaaa-mm-dd hh:mm': ");
                            fecha1 = moment(fecha);
                            fecha = readline.question("Introduce la segunda fecha y hora con el formato 'aaaa-mm-dd hh:mm': ");
                            fecha2 = moment(fecha);
                            
                            adminController.facturacion(fecha1,fecha2);
                            break;
                        case 3:
                            
                            adminController.consultaAbonados();

                            break;
                        
                        case 4:
                            let mes = readline.question("Introduce un mes en número: ");
                            console.log("\nAbonos que caducan en ese mes:")
                            
                            adminController.caducidadAbonosMes(mes);

                            break;
                        case 5:
                            console.log("\nAbonos que caducan en los próximos 10 días:")
                            
                            adminController.caducidadAbonosProximos10Dias();

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
            console.log("\nSaliendo...");
            break;

        default:
            console.log("Esa opción no está disponible");
            break;
    }

} while (op != 0);
   


console.log("Gracias por usar el parking");