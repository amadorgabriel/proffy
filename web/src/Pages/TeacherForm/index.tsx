import React, { useState, FormEvent } from 'react';
import {useHistory} from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';

import './styles.css'
import api from '../../services/api';

export default function TeacherForm() {

    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhastapp] = useState('');
    const [bio, setBio] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems, //copia o array atual
            { week_day: 0, from: '', to: '' }
        ])
    }

    function handleCreateClass(event:FormEvent){
        event.preventDefault();

        api.post('classes', {
            name: name,
            avatar: avatar,
            whatsapp: whatsapp,
            bio: bio, 
            subject: subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Cadastro realizado com sucesso!');
            history.push('/');
        }).catch(() => {
            alert('Erro no cadastro');
        })
    };

    function setScheduleItemValue(position:number, field:string, value:string){
        const updatedScheduleItems = scheduleItems.map((element, index) =>{
            if(index === position){
                return {...element, [field]:value }
            }
            return element;
        })

        setScheduleItems(updatedScheduleItems);
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição"
            />

            <main>
                <form onSubmit={handleCreateClass}>

                    <fieldset>
                        <legend>Seus Dados</legend>

                        <Input
                            required
                            name="name"
                            label="Nome completo"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />
                        <Input
                            required
                            name="avatar"
                            label="Avatar"
                            value={avatar}
                            onChange={(e) => { setAvatar(e.target.value) }}
                        />
                        <Input
                            required
                            name="whatsapp"
                            label="Whatsapp"
                            value={whatsapp}
                            onChange={(e) => { setWhastapp(e.target.value) }}
                        />
                        <Textarea
                            required
                            name="bio"
                            label="Biografia"
                            value={bio}
                            onChange={(e) => { setBio(e.target.value) }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a Aula</legend>

                        <Select
                            required
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
                        <Input
                            required
                            name="cost"
                            label="Custo da sua hora por aula"
                            value={cost}
                            onChange={(e) => { setCost(e.target.value) }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários Disponíveis
                        <button type='button' onClick={addNewScheduleItem}>
                                + Novo horário
                        </button>
                        </legend>

                        {scheduleItems.map((element, index) => {
                            return (
                                <div key={element.week_day} className="schedule-item">
                                    <Select
                                        required
                                        name="week_day"
                                        label="Dia da Semana"
                                        value={element.week_day}
                                        onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
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
                                        required
                                        name="from" 
                                        label="Das" 
                                        type="time" 
                                        value={element.from}
                                        onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                    />
                                    <Input 
                                        required
                                        name="to" 
                                        label="Até" 
                                        type="time" 
                                        value={element.to}
                                        onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                    />

                                </div>
                            );
                        })}

                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso Importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>

                        <button type="submit">
                            Salvar Cadastro
                    </button>
                    </footer>
                </form>
            </main>
        </div>
    );
}