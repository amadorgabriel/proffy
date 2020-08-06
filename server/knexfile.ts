import path from 'path';

//module.exports é o antecessor de export default
module.exports = {
    client: 'sqlite3',
    connection:{
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
    },
    migrations:{
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    useNullAsDefault: true
}