class ParkingController{

    plazasLibres(a,b,c){
        
        console.log(`Hay ${a.length} plazas de turismos, ${b.length} plazas de motocicletas y ${c.length} plazas de caravanas libres`);
        
    }

}

let parkingController = new ParkingController();

export { parkingController };