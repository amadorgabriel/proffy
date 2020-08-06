import Knex from 'knex';

export async function up(Knex: Knex){
    return Knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subjet').notNullable();
        table.decimal('cost').notNullable();

        //relacionamento 
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE') //se talvez o id for atualizado, todos seus relacionamentos tbm serão
            .onDelete('CASCADE'); //se talvez o id for deletado, todos seus relacionamentos tbm serão
    })
}

export async function down(Knex: Knex){
    return Knex.schema.dropTable('classes');
}