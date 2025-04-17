import { ServicioRepository } from "../repository/servicio.repository.js";


export const ServicioController = {
  crear: async (req, res) => {
    try {
      const datos = req.body;
      const nuevoServicio = await ServicioRepository.crearServicioRepository(datos);
      res.status(201).json({
        ok: true,
        message: "Servicio creado exitosamente",
        data: nuevoServicio
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: "Error al crear el servicio" });
    }
  },

  listar: async (req, res) => {
    try {
        const servicios = await ServicioRepository.obtenerServicioRepository();
        res.status(200).json(servicios)
    } catch (error){
        res.status(500).json({ mensaje: "Error al obtener los servicios" });
        }
    },
  // obtener por id
  obtenerPorId: async (req, res) => {
    try {
      const id = req.params.id;
      const servicio = await ServicioRepository.obtenerServicioIDRepository(id);

      if (!servicio) {
        return res.status(404).json({ mensaje: "Servicio no encontrado" });
      }

      res.status(200).json(servicio);
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: "Error al obtener el servicio" });
    }
  },
  eliminar: async (req , res) =>{
    try {
      const id = req.params.id;
      const servicioEliminado = await ServicioRepository.eliminarServicioRepository(id);

      if(!servicioEliminado){
        return res.status(404).json({message: "Servicio no encontrado"});
      }
      res.status(200).json({message: "Sericio eliminado satisfactoriamente"})


    } catch (error){
      console.log(error)
      res.status(500).json({message: "Error al eliminar el servicio"});
    };
  },
  actualizar: async (req, res) => {
    try {
      const id = req.params.id;
      const datos = req.body;
  
      const servicioActualizado = await ServicioRepository.actualizarServicioRepository(id, datos);
  
      if (!servicioActualizado) {
        return res.status(404).json({ mensaje: "Servicio no encontrado" });
      }
  
      res.status(200).json({
        mensaje: "Servicio actualizado correctamente",
        data: servicioActualizado
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: "Error al actualizar el servicio" });
    }
  }
}


