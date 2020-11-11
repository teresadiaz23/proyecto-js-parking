import {ClienteAbonado} from "../Modelos/cliente_abonado.js";

class ClienteAbonadoRepositorio{
    constructor(listaAbonados){
        this.listaAbonados = listaAbonados;
    }
}

let listaAbonados = [
    new ClienteAbonado("12345678A", "Pepe", "Pérez", "123123123", null, "pepe@email.com"),
    new ClienteAbonado("12345678B", "María", "García", "456456456", null, "maria@email.com"),
    new ClienteAbonado("12345678C", "Ana", "Rodríguez", "678678678", null, "ana@email.com"),
    new ClienteAbonado("12345678D", "Antonio", "Fernández", "654654654", null, "antonio@email.com")
];


let repositorio = new ClienteAbonadoRepositorio(listaAbonados);
for (const cliente of repositorio.listaAbonados) {
    console.log(cliente);
    
}

