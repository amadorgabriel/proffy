import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';

import "./styles.css";
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

export default function TeacherList() {

    const [teachers, setTeachers] = useState([]);
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(event: FormEvent) {
        event.preventDefault();

        const response = await api.get('classes', {
            params: { //queryParams
                subject,
                week_day,
                time
            }
        });

        if (response.data.length === 0) {
            alert('Não há proffys disponíveis');
        }

        setTeachers(response.data);
    }


    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os Proffys disponíveis." >
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value) }}
                        options={[
                            { value: "Artes", label: "Artes" },
                            { value: "Biologia", label: "Biologia" },
                            { value: "Educação Física", label: "Educação Física" },
                            { value: "Filosofia", label: "Filosofia" },
                            { value: "Física", label: "Física" },
                            { value: "Geografia", label: "Geografia" },
                            { value: "História", label: "História" },
                            { value: "Inglês", label: "Inglês" },
                            { value: "Lingua Portuguesa", label: "Lingua Portuguesa" },
                            { value: "Matemática", label: "Matemática" },
                            { value: "Química", label: "Química" },
                            { value: "Sociologia", label: "Sociologia" },
                        ]}
                    />

                    <Select
                        name="week_day"
                        label="Dia da Semana"
                        value={week_day}
                        onChange={(e) => { setWeekDay(e.target.value) }}
                        options={[
                            { value: "0", label: "Domingo" },
                            { value: "1", label: "Segunda-feira" },
                            { value: "2", label: "Terça-feira" },
                            { value: "3", label: "Quarta-feira" },
                            { value: "4", label: "Quinta-feira" },
                            { value: "5", label: "Sexta-feira" },
                            { value: "6", label: "Sábado" }
                        ]}
                    />
                    <Input
                        type="time"
                        name="time"
                        label="Hora"
                        value={time}
                        onChange={(e) => { setTime(e.target.value) }}
                    />

                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>

            <main>

                {teachers.length === 0 &&

                    <article className="teacher-item">
                        <header>
                            <div>
                                <strong>Sem Conteúdo</strong>
                                <span>Faça uma busca e veja suas oportunidades de aprendizado</span>
                            </div>
                        </header>

                        <footer>
                            <p>Importante! <strong> Preencha todos os campos antes de filtrar</strong></p>
                        </footer>
                    </article>
                }

                {teachers.map((element: Teacher) => {
                    return <TeacherItem key={element.id} teacher={element} />
                })}
            </main>

        </div>
    );
}