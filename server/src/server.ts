//Primeiro arquivo a ser lido quando ececutada a aplicação
import express, { request, response } from 'express';

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
    return response.json({message: 'Hello World!'})
});

//Porta do servidor
app.listen(8080);