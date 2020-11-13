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

    imprimirAbono(abono){
        
        console.log(`\nAbono\nTipo: ${abono.tipo}\nId Plaza: ${abono.clienteAbonado.idPlaza}
Fecha Activación: ${abono.fechaActivacion.date()}/${abono.fechaActivacion.month()+1}/${abono.fechaActivacion.year()}
Fecha Caducidad: ${abono.fechaCancelacion.date()}/${abono.fechaCancelacion.month()+1}/${abono.fechaCancelacion.year()}`);
            
    }
    imprimirAbonoDni(dni, pin){
        
        let cliente = abonadoRepositorio.listaAbonados.find(cliente => cliente.dni === dni);
        let abono = abonoServicio.findAll().find(abono => abono.clienteAbonado === cliente);
        let abono2 = abonoServicio.findAll().find(abono => abono.pin == pin);
        
        if(abono === abono2 && abono !== undefined){
            console.log(`\nAbono\nTipo: ${abono.tipo}\nId Plaza: ${abono.clienteAbonado.idPlaza}
Fecha Activación: ${abono.fechaActivacion.date()}/${abono.fechaActivacion.month()+1}/${abono.fechaActivacion.year()}
Fecha Caducidad: ${abono.fechaCancelacion.date()}/${abono.fechaCancelacion.month()+1}/${abono.fechaCancelacion.year()}`);
        }
        
            
    }
}

let abonoServicio = new AbonoServicio(abonoRepositorio);

export { abonoServicio }; 