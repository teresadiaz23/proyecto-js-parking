import moment from 'moment';
import { Abono } from '../Modelos/abono.js';
import { abonadoRepositorio } from './cliente_abonado_repositorio.js';

class AbonoRepositorio{
    constructor(listaAbonos){
        this.listaAbonos = listaAbonos;
    }
}

let pin = Math.floor(Math.random() * (999999 - 111111) + 111111);

let a1 = new Abono(pin, "mensual", moment("2020-10-20"),  moment("2020-10-22").add(1, 'months'), abonadoRepositorio.listaAbonados[0], 25);
pin = Math.floor(Math.random() * (999999 - 111111) + 111111);
let a2 = new Abono(pin, "trimestral", moment(),  moment().add(3, 'months'), abonadoRepositorio.listaAbonados[1], 70);
pin = Math.floor(Math.random() * (999999 - 111111) + 111111);
let a3 = new Abono(pin, "semestral", moment(),  moment().add(6, 'months'), abonadoRepositorio.listaAbonados[2], 130);
pin = Math.floor(Math.random() * (999999 - 111111) + 111111);
let a4 = new Abono(pin, "anual", moment(),  moment().add(1, 'years'), abonadoRepositorio.listaAbonados[3], 200);


let listaAbonos = [];
listaAbonos = listaAbonos.concat(a1,a2,a3,a4);
let abonoRepositorio = new AbonoRepositorio(listaAbonos);

//console.log(a1.fechaCancelacion);

export { abonoRepositorio };
