import { parkingRepo } from "../Repositorios/parking_repositorio.js";
import { Caravana, Motocicleta, Turismo } from "../Modelos/vehiculo.js";


class ParkingServicio{

    constructor(repo){
        this.repo = repo;
    }

    findAll(){
        return this.repo.findAll();
    }
    
    plazasLibresTurismo(){
        let libres = [];
        for (let i = 0; i < this.repo.parking.plazas.length; i++) {
            if(this.repo.parking.plazas[i].tipoVehiculo == "turismo"){
                if(this.repo.parking.plazas[i].ocupada == false && this.repo.parking.plazas[i].cliente == null){
                    libres.push(this.repo.parking.plazas[i]);
                }
                
            }
        }
    
        return libres;
    }
    
    plazasLibresMoto(){
        let libres = [];
        for (let i = 0; i < this.repo.parking.plazas.length; i++) {
            if(this.repo.parking.plazas[i].tipoVehiculo == "motocicleta"){
                if(this.repo.parking.plazas[i].ocupada == false && this.repo.parking.plazas[i].cliente == null){
                    libres.push(this.repo.parking.plazas[i]);
                }
                
            } 
            
        }
    
        return libres;
    }
    
    plazasLibresCaravana(){
        let libres = [];
        for (let i = 0; i < this.repo.parking.plazas.length; i++) { 
            if(this.repo.parking.plazas[i].tipoVehiculo == "caravana"){
                if(this.repo.parking.plazas[i].ocupada == false && this.repo.parking.plazas[i].cliente == null){
                    libres.push(this.repo.parking.plazas[i]);
                }
                
            }
            
        }
    
        return libres;
    }
    


}

let parkingServicio = new ParkingServicio(parkingRepo);


export { parkingServicio };