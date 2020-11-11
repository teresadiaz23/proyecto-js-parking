import {Plaza} from "../Modelos/plaza.js";
import { Turismo, Motocicleta, Caravana } from "../Modelos/vehiculo.js";

class PlazaRepositorio{
    constructor(listaPlazas=[]){
        this.listaPlazas = listaPlazas;
    }

    alta(plaza){
        this.listaPlazas.push(plaza);
    }
}

const NUMPLAZA = 45;
let listaPlazas = new Array(45);

for (let i = 0; i < listaPlazas.length; i++) {
    if(i < 15){
        listaPlazas[i]= new Plaza(i+1, new Turismo(0.12));
    }
    else if(i >= 15 && i < 30){
        listaPlazas[i]= new Plaza(i+1, new Motocicleta(0.08));
    }
    else{
        listaPlazas[i]= new Plaza(i+1, new Caravana(0.45));
    }
    

}

let plazaRepo = new PlazaRepositorio();
for (const plaza of listaPlazas) {
    plazaRepo.alta(plaza);
}



export { plazaRepo };