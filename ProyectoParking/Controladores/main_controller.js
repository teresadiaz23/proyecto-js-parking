class MainController{

    menuPrincipal(){
        return `\nPulse 1 si eres cliente normal
Pulse 2 si eres cliente abonado
Pulse 3 si eres administrador
Pulse 0 para salir
`;
    }
    


}

let mainController = new MainController();

export { mainController };