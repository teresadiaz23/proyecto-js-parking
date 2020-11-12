import { parkingRepo } from "../Repositorios/parking_repositorio.js";
import { Caravana, Motocicleta, Turismo } from "../Modelos/vehiculo.js";


class ParkingServicio{

    constructor(repo){
        this.repo = repo;
    }
    plazasLibresTurismo(){
        let libres = [];
        for (let i = 0; i < this.repo.parking.plazas.length; i++) {
            if(this.repo.parking.plazas[i].vehiculo instanceof Turismo){
                if(this.repo.parking.plazas[i].ocupada == false && this.repo.parking.plazas[i].cliente === null){
                    libres.push(this.repo.parking.plazas[i]);
                }
                
            }
        }
    
        return libres;
    }
    
    plazasLibresMoto(){
        let libres = [];
        for (let i = 0; i < this.repo.parking.plazas.length; i++) {
            
            if(this.repo.parking.plazas[i].vehiculo instanceof Motocicleta){
                if(this.repo.parking.plazas[i].ocupada == false && this.repo.parking.plazas[i].cliente === null){
                    libres.push(this.repo.parking.plazas[i]);
                }
                
            } 
            
        }
    
        return libres;
    }
    
    plazasLibresCaravana(){
        let libres = [];
        for (let i = 0; i < this.repo.parking.plazas.length; i++) { 
            if(this.repo.parking.plazas[i].vehiculo instanceof Caravana){
                if(this.repo.parking.plazas[i].ocupada == false && this.repo.parking.plazas[i].cliente === null){
                    libres.push(this.repo.parking.plazas[i]);
                }
                
            }
            
        }
    
        return libres;
    }
    // plazasLibresTurismo(){
    //     let libres = [];
    //     for (let i = 0; i < parkingRepo.parking.plazas.length; i++) {
    //         if(parkingRepo.parking.plazas[i].vehiculo instanceof Turismo){
    //             if(parkingRepo.parking.plazas[i].ocupada == false){
    //                 libres.push(parkingRepo.parking.plazas[i]);
    //             }
                
    //         }
    //     }
    
    //     return libres;
    // }
    
    // plazasLibresMoto(){
    //     let libres = [];
    //     for (let i = 0; i < parkingRepo.parking.plazas.length; i++) {
            
    //         if(parkingRepo.parking.plazas[i].vehiculo instanceof Motocicleta){
    //             if(parkingRepo.parking.plazas[i].ocupada == false){
    //                 libres.push(parkingRepo.parking.plazas[i]);
    //             }
                
    //         } 
            
    //     }
    
    //     return libres;
    // }
    
    // plazasLibresCaravana(){
    //     let libres = [];
    //     for (let i = 0; i < parkingRepo.parking.plazas.length; i++) {
            
    //         if(parkingRepo.parking.plazas[i].vehiculo instanceof Caravana){
    //             if(parkingRepo.parking.plazas[i].ocupada == false){
    //                 libres.push(parkingRepo.parking.plazas[i]);
    //             }
                
    //         }
            
    //     }
    
    //     return libres;
    // }
    
    imprimirPlazasLibres(a,b,c){
        console.log(`Hay ${a.length} plazas de turismos, ${b.length} plazas de motocicletas y ${c.length}
         plazas de caravanas libres`);
    }

}

let parkingServicio = new ParkingServicio(parkingRepo);





export { parkingServicio };