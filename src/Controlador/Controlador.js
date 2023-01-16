const Servicio = require("../Servicio/Servicio");

module.exports = class Controlador{
    static async metodoControlador( req, res){
        try{
            Servicio.metodoServicio( req, res);
        }catch(error){
            res.status().json({error:error})
        }
    }
}
