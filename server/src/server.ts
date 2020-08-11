//Primeiro arquivo a ser lido quando ececutada a aplicação
import express, { request, response } from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

//Porta do servidor
app.listen(8080);