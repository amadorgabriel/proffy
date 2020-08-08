export default function convertHourToMinutes(time: string){
    //Separa o horário 8:25 em 8 e 25
    //Percore cada um e converte para Number
    //Atribui o hours = 8 e munites = 25 
    const[hours, minutes] = time.split(':').map(Number);
    const timeInMinutes = (hours*60) + minutes;
    return timeInMinutes;
}