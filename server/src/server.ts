//Primeiro arquivo a ser lido quando ececutada a aplicação
import express, { request, response } from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(routes);
app.use(cors());

//Porta do servidor
app.listen(8080);