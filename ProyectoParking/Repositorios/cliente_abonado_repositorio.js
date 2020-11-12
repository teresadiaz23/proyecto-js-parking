import { Abono } from "../Modelos/abono.js";
import { ClienteAbonado } from "../Modelos/cliente_abonado.js";
import { Caravana, Motocicleta, Turismo } from "../Modelos/vehiculo.js";
import moment from 'moment';

class ClienteAbonadoRepositorio{
    constructor(listaAbonados=[]){
        this.listaAbonados = listaAbonados;
    }

    alta(cliente){
        this.listaAbonados.push(cliente);
    }
    
}



let listaAbonados = [
    new ClienteAbonado("12345678A", "Pepe", "Pérez", "123123123", "pepe@email.com", new Turismo(0.12, "5678DDD"), "mensual"),
    new ClienteAbonado("12345678B", "María", "García", "456456456", "maria@email.com", new Motocicleta(0.08, "9387GGG"), "trimestral"),
    new ClienteAbonado("12345678C", "Ana", "Rodríguez", "678678678", "ana@email.com", new Caravana(0.45, "5278JJJ"), "semestral"),
    new ClienteAbonado("12345678D", "Antonio", "Fernández", "654654654", "antonio@email.com", new Turismo(0.12, "7654FFF"), "anual")
];


let abonadoRepositorio = new ClienteAbonadoRepositorio();
for (const cliente of listaAbonados) {
    abonadoRepositorio.alta(cliente);
    
}
//console.log(repositorio.listaAbonados);

export { abonadoRepositorio };


