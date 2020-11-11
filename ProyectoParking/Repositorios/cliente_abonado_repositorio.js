import {ClienteAbonado} from "../Modelos/cliente_abonado.js";

class ClienteAbonadoRepositorio{
    constructor(listaAbonados=[]){
        this.listaAbonados = listaAbonados;
    }

    alta(cliente){
        this.listaAbonados.push(cliente);
    }
    
}

let listaAbonados = [
    new ClienteAbonado("12345678A", "Pepe", "Pérez", "123123123", "pepe@email.com"),
    new ClienteAbonado("12345678B", "María", "García", "456456456", "maria@email.com"),
    new ClienteAbonado("12345678C", "Ana", "Rodríguez", "678678678", "ana@email.com"),
    new ClienteAbonado("12345678D", "Antonio", "Fernández", "654654654", "antonio@email.com")
];


let repositorio = new ClienteAbonadoRepositorio();
for (const cliente of listaAbonados) {
    repositorio.alta(cliente);
    
}
console.log(repositorio.listaAbonados);


