import Knex from 'knex';


export async function up (Knex: Knex){
    return Knex.schema.createTable('class_schedule', table =>{
        table.increments('id').primary();
        table.integer('week_day').notNullable(); // 1- domingo 2- segunda...
        table.integer('from').notNullable(); // 8 - oito horas da manha
        table.integer('to').notNullable(); // 14 - duas da tarde

        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

    })
}


export async function down (Knex: Knex){
    return Knex.schema.dropTable('class_schedule');
}