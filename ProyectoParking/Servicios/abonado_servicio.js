import { abonoRepositorio } from "../Repositorios/abono_repositorio.js";
import { abonadoRepositorio } from "../Repositorios/cliente_abonado_repositorio.js";
import { plazaRepo } from "../Repositorios/plaza_repositorio.js";
import { abonoServicio } from "./abono_servicio.js";
import { parkingServicio } from "./parking_servicio.js";

class AbonadoServicio{
    depositarAbonados(matricula, dni){
        let depositado = false;
        let cliente = abonadoRepositorio.listaAbonados.find(cliente => cliente.dni === dni);
        let cliente2 = abonadoRepositorio.listaAbonados.find(cliente => cliente.vehiculo.matricula === matricula);
        if(cliente === cliente2 && cliente !== undefined){
            depositado = true;
            let plaza = parkingServicio.findAll().plazas.find(plaza => plaza.cliente === cliente);
            plaza.ocupada = true;
        }

        return depositado;

    }
    
    retirarAbonados(matricula, id, pin){
        let retirado = false;
        
        let cliente1 = abonadoRepositorio.listaAbonados.find(cliente => cliente.vehiculo.matricula === matricula);
        let plaza = parkingServicio.findAll().plazas.find(plaza => plaza.id == id);
        let abono = abonoServicio.findAll().find(abono => abono.pin == pin);
        if(cliente1 !== undefined && abono !== undefined){
            
            if(abono.clienteAbonado === cliente1 && plaza.ocupada){
                
                let plaza = parkingServicio.findAll().plazas.find(plaza => plaza.id == id);
                plaza.ocupada = false;
                retirado = true;
            }
        }

        return retirado;
        

        
    }

    obtenerAbono(dni, pin){
        let cliente = abonadoRepositorio.listaAbonados.find(cliente => cliente.dni === dni);
        let abono = abonoServicio.findAll().find(abono => abono.clienteAbonado == cliente);
        let abono2 = abonoServicio.findAll().find(abono => abono.pin == pin);
        
        
        return abono;
        
    }


    obtenerDatosPersonales(dni, pin){
        let cliente = abonadoRepositorio.listaAbonados.find(cliente => cliente.dni === dni);
        let abono = abonoServicio.findAll().find(abono => abono.clienteAbonado == cliente);
        let abono2 = abonoServicio.findAll().find(abono => abono.pin == pin);
        

        return cliente;

        
        
    }
}

let abonadoServicio = new AbonadoServicio();


export { abonadoServicio };