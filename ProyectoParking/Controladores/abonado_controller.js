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

}

let abonadoController = new AbonadoController();

export { abonadoController };