import { abonadoRepositorio } from "../Repositorios/abono_repositorio.js";
import { plazaRepo } from "../Repositorios/plaza_repositorio.js";

class AbonadoServicio{
    depositarAbonados(matricula, dni){
        let depositado = false;
        let cliente = abonadoRepositorio.listaAbonados.find(cliente => cliente.dni === dni);
        let cliente2 = abonadoRepositorio.listaAbonados.find(cliente => cliente.vehiculo.matricula === matricula);
        if(cliente === cliente2){
            depositado = true;
            let plaza = plazaRepo.listaPlazas.find(plaza => plaza.cliente === cliente);
            plaza.ocupada = true;
        }

        return depositado;

    }
    
    retirarAbonados(){
        
    }
}
