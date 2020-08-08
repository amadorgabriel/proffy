import express from 'express';
import ClassesController from './controllers/classController';
import ConnectionsController from './controllers/connectionsController';

//extrai apenas o módulo Router
const routes = express.Router();

const classesController = new ClassesController();
const connectionsController = new ConnectionsController()

 // Aulas
 routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);


//Connections
routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);


export default routes;

