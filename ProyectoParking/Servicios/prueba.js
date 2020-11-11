class AbonoRepositorio{
    constructor(listaAbonos=[]){
        this.listaAbonos = listaAbonos;
    }

}

let listaAbonos = [
    new Abono("Mensual", 25),
    new Abono("Trimestral",70)
];

let abonoRepositorio = new AbonoRepositorio(listaAbonos);

export { abonoRepositorio };


