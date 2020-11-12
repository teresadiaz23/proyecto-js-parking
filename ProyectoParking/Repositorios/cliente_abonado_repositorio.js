import { Abono } from "../Modelos/abono.js";
import { ClienteAbonado } from "../Modelos/cliente_abonado.js";
import { Caravana, Motocicleta, Turismo } from "../Modelos/vehiculo.js";
import moment from 'moment';

class ClienteAbonadoRepositorio{
    constructor(listaAbonados=[]){
        this.listaAbonados = listaAbonados;
    }

    save(cliente){
        this.listaAbonados.push(cliente);
    }
    
}



let listaAbonados = [
    new ClienteAbonado("12345678A", "Pepe", "Pérez", "123123123", "pepe@email.com", new Turismo("5678DDD"), "mensual", 5),
    new ClienteAbonado("12345678B", "María", "García", "456456456", "maria@email.com", new Motocicleta("9387GGG"), "trimestral", 17),
    new ClienteAbonado("12345678C", "Ana", "Rodríguez", "678678678", "ana@email.com", new Caravana("5278JJJ"), "semestral", 36),
    new ClienteAbonado("12345678D", "Antonio", "Fernández", "654654654", "antonio@email.com", new Turismo("7654FFF"), "anual", 8)
];


let abonadoRepositorio = new ClienteAbonadoRepositorio();
for (const cliente of listaAbonados) {
    abonadoRepositorio.save(cliente);
    
}
//console.log(repositorio.listaAbonados);

export { abonadoRepositorio };


