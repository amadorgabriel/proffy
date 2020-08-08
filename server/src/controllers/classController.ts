import { Response, Request } from 'express';
import db from '../database/connection';
import convertHourToMinutes from '../utils/ConvertHourToMinutes';


//Interface TypeScript define o modelo de um onjeto
interface ScheduleItem {
    week_day: number,
    from: string,
    to: string
}

export default class ClassesController {

    //Listagem
    async index(request: Request, response: Response) {
        //parametros na url
        const filters = request.query;

        const week_day = filters.week_day as string;
        const time = filters.time as string;
        const subject = filters.subject as string;

        if (!filters.week_day || !filters.time || !filters.subject) {
            return response.status(400).json({
                error: 'Missing filter to search classes'
            })
        }

        const timeInMunites = convertHourToMinutes(time);

        const classes = await db('classes')
            .whereExists(function () {
                this.select('class_schedule.*')
                    .from('class_schedule')
                    .whereRaw(' `class_schedule`.`class_id` = `classes`.`id` ') //whereRaw escreve um script na mão
                    .whereRaw(' `class_schedule`.`week_day` = ??', [Number(week_day)]) //interpolação em '??'
                    .whereRaw(' `class_schedule`.`from` <= ??', [timeInMunites])
                    .whereRaw(' `class_schedule`.`to` > ??', [timeInMunites])

            })
            .where('classes.subject', '=', subject)
            .join('users', 'classes.user_id', '=', 'users.id')
            .select(['classes.*', 'users.*']);

        return response.json(classes);

    }

    async create(request: Request, response: Response) {

        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = request.body;

        //Se alguma operação façhar todas são canceladas, desse modo se não conseguir inserir a classes o user é excluido
        const trx = await db.transaction();

        try {

            //Insere Usuário
            const insertedUsersIds = await trx('users').insert({
                name: name,
                avatar: avatar,
                whatsapp: whatsapp,
                bio: bio
            });

            //Insere Class
            const insertedClassesIds = await trx('classes').insert({
                subject: subject,
                cost: cost,
                user_id: insertedUsersIds[0]
            });

            //Gera Planejamento de Aula -- CASTING
            const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
                return {
                    class_id: insertedClassesIds[0],
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to: convertHourToMinutes(scheduleItem.to)
                }
            });

            // Insere PLanejamento de Aula
            await trx('class_schedule').insert(classSchedule);

            await trx.commit();
            return response.status(201).send();

        } catch (err) {
            //defaz alterações
            await trx.rollback();

            return response.status(400).json({
                error: 'Unexpected error while creating new class'
            })
        }

    }
};
