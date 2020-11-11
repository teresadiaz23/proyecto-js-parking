import {Plaza} from "../Modelos/plaza.js";
import { Turismo, Motocicleta, Caravana } from "../Modelos/vehiculo.js";

class PlazaRepositorio{
    constructor(listaPlazas){
        this.listaPlazas = listaPlazas;
    }
}

const NUMPLAZA = 45;
let listaPlazas = new Array(45);
listaPlazas.length = 45;
for (let i = 1; i <= NUMPLAZA; i++) {
    if(i < 16){
        listaPlazas[i]= new Plaza(i, new Turismo(0.12));
    }
    else if(i >= 16 && i < 31){
        listaPlazas[i]= new Plaza(i, new Motocicleta(0.08));
    }
    else{
        listaPlazas[i]= new Plaza(i, new Caravana(0.45));
    }
    

}

let plazaRepo = new PlazaRepositorio(listaPlazas);
for (const plaza of listaPlazas) {
    console.log(plaza);
}

export { plazaRepo };