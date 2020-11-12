import { abonoRepositorio } from "../Repositorios/abono_repositorio.js";
import { abonadoRepositorio } from "../Repositorios/cliente_abonado_repositorio.js";
import { plazaRepo } from "../Repositorios/plaza_repositorio.js";
import { parkingServicio } from "./parking_servicio.js";

class AbonadoServicio{
    depositarAbonados(matricula, dni){
        let depositado = false;
        let cliente = abonadoRepositorio.listaAbonados.find(cliente => cliente.dni === dni);
        let cliente2 = abonadoRepositorio.listaAbonados.find(cliente => cliente.vehiculo.matricula === matricula);
        if(cliente === cliente2 && cliente !== undefined){
            depositado = true;
            let plaza = parkingServicio.repo.parking.plazas.find(plaza => plaza.cliente === cliente);
            plaza.ocupada = true;
        }

        return depositado;

    }
    
    retirarAbonados(matricula, id, pin){
        let retirado = false;
        
        let cliente1 = abonadoRepositorio.listaAbonados.find(cliente => cliente.vehiculo.matricula === matricula);
        let plaza = parkingServicio.repo.parking.plazas.find(plaza => plaza.id == id);
        let abono = abonoRepositorio.listaAbonos.find(abono => abono.pin == pin);
        if(cliente1 !== undefined && abono !== undefined){
            
            if(abono.clienteAbonado === cliente1 && plaza.ocupada){
                
                let plaza = parkingServicio.repo.parking.plazas.find(plaza => plaza.id == id);
                plaza.ocupada = false;
                retirado = true;
            }
        }

        return retirado;
        

        
    }

    verAbono(matricula, dni){
        let cliente = abonadoRepositorio.listaAbonados.find(cliente => cliente.dni === dni);
        let cliente2 = abonadoRepositorio.listaAbonados.find(cliente => cliente.vehiculo.matricula === matricula);
        let abono;
        if(cliente === cliente2 && cliente !== undefined){
            abono = abonoRepositorio.listaAbonos.find(abono => abono.clienteAbonado === cliente);
            
        }
        return abono;
    }
}

let abonadoServicio = new AbonadoServicio();

// console.log(abonadoServicio.verAbono("7654FFF", "12345678D"));
// console.log(abonadoServicio.retirarAbonados("7654FFF", 8, 111111));
export { abonadoServicio };