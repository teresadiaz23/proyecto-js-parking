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

console.log("Bienvenido al parking");


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
                        // if (clienteServicio.depositarVehiculo(matricula, tipo, parkingServicio.plazasLibresTurismo(),
                        // parkingServicio.plazasLibresMoto(), parkingServicio.plazasLibresCaravana())) {
                        //     console.log("");
                            
                        //     ticketServicio.imprimirTicket(ticketServicio.findAll()[ticketServicio.findAll().length-1]);
                           
                        //     console.log("Su vehículo ha sido depositado correctamente");

                        // }
                        // else{
                        //     console.log("Los datos introducidos no son correctos")
                        // }
                        clienteController.depositarVehiculo(matricula, tipo, parkingServicio.plazasLibresTurismo(),
                         parkingServicio.plazasLibresMoto(), parkingServicio.plazasLibresCaravana());

                        break;
                    case 2:
                        matricula = readline.question('Introduce la matrícula de su vehículo: ');
                        id = parseInt(readline.question('Introduce la identificador de la plaza: '));
                        pin = parseInt(readline.question('Introduce el pin del ticket: '));
                        // let total = clienteServicio.retirarVehiculo(matricula, id, pin);
                        // if(total >= 0){
                        //     console.log(`\nImporte a pagar: ${total}€`);
                        //     console.log("Puede retirar su vehículo");

                        // }
                        // else{
                        //     console.log("\nLos datos introducidos no son correctos");
                        // }
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
                        // if(adminServicio.altaAbonos(dni, nombre, apellidos, numTarjeta, email, matricula, tipoVehiculo, tipoAbono)){
                        //     console.log("\nHa obtenido un abono correctamente");
                        //     abonoServicio.imprimirAbono(abonoServicio.findAll()[abonoServicio.findAll().length-1]);
                        // }
                        // else{
                        //     console.log("\nError. No se ha podido generar correctamente")
                        // }
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
                        // matricula = readline.question('Introduce la matrícula de su vehículo: ');
                        dni = readline.question('Introduce su dni: ');
                        pin = readline.question('Introduce su pin: ');
                        if (abonadoServicio.obtenerAbono(dni, pin) !== undefined) {
                            abonoServicio.imprimirAbono(abonadoServicio.obtenerAbono(dni, pin));
                        }
                        else {
                            console.log("\nNo existe ningún abono con esos datos");
                        }
                        // dni = readline.question('Introduce su dni: ');
                        // pin = readline.question('Introduce su pin: ');
                        // abonoServicio.imprimirAbonoDni(dni, pin);


                        break;
                    case 4:
                        dni = readline.question('Introduce su dni: ');
                        pin = readline.question('Introduce su pin: ');
                        if (abonadoServicio.obtenerDatosPersonales(dni, pin) !== undefined) {
                            
                        }
                        else {
                            console.log("\nNo existe ningún abono con esos datos");
                        }
                        
                        break;
                    case 5:
                        // nombre = null, apellidos = null, email = null, numTarjeta = null;
                        dni = readline.question('Introduce su dni: ');
                        pin = readline.question('Introduce su pin: ');
                        console.log("A continuación introduce los datos que quiera modificar");
                        nombre = readline.question('Introduce su nombre: ');
                        apellidos = readline.question('Introduce sus apellidos: ');
                        numTarjeta = readline.question('Introduce un número de tarjeta bancaria: ');
                        email = readline.question('Introduce su email: ');
                        if (adminServicio.modificarDatosAbono(dni, pin, nombre, apellidos, numTarjeta, email)) {
                            console.log("\nLos datos se han modificado correctamente");
                            abonadoServicio.obtenerDatosPersonales(dni, pin);
                        }
                        else {
                            console.log("Error. Los datos no se han podido modificar");
                        }

                        break;
                    case 6:
                        dni = readline.question('Introduce su dni: ');
                        pin = readline.question('Introduce su pin: ');
                        tipoAbono = readline.question('Introduce el tipo del abono a renovar(mensual, trimestral, semestral o anual): ');
                        if (adminServicio.renovacionAbonos(dni, pin, tipoAbono)) {
                            console.log("\nSu abono se ha renovado correctamente");
                            abonoServicio.imprimirAbonoDni(dni, pin);
                        }
                        else {
                            console.log("Error. Su abono no se ha podido renovar");
                        }

                        break;
                    case 7:
                        dni = readline.question('Introduce su dni: ');
                        pin = readline.question('Introduce su pin: ');
                        if(adminServicio.borradoAbono(dni, pin)){
                            console.log("\nSe ha borrado correctamente");
                        }
                        else{
                            console.log("\nError. No se ha podido borrar");
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
                    op2 = parseInt(readline.question(adminController.menuAdmin()));
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
                            let mes = readline.question("Introduce un mes en número: ");
                            console.log("\nAbonos que caducan en ese mes:")
                            adminServicio.caducidadAbonosMes(mes);

                            break;
                        case 5:
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