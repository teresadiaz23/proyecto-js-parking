import { abonoRepositorio } from "../Repositorios/abono_repositorio.js";
import { abonadoRepositorio } from "../Repositorios/cliente_abonado_repositorio.js";

class AbonoServicio{
    constructor(repo){
        this.repo = repo;
    }

    save(abono){
        this.repo.save(abono);
    }
    findAll(){
        return this.repo.listaAbonos;
    }


}

let abonoServicio = new AbonoServicio(abonoRepositorio);

export { abonoServicio }; 