import express from 'express';
import morgan from 'morgan';
import ServicioRouter  from "./routers/servicio.routes.js";



const App = express();

App.use(morgan('dev'));
App.use(express.json());

App.use(ServicioRouter)




export default App ;