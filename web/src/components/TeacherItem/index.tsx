import React from 'react';

import './styles.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';


function TeacherItem() {
    return(
        <article className="teacher-item">
        <header>
            <img src="https://lh3.googleusercontent.com/DAtV1zzoMieUrO-EI4ZRCl3J63xWpdNW_ppSE25KVm48FcKowvIIxNj-Rb3xdsENf6KY=s83" alt=""/>
            <div>
                <strong>Gabriel Amador</strong>
                <span>Física</span>
            </div>
        </header>

        <p>
            Apreciador desde a base ao avançado da Física Moderna 
            <br/> <br/>
            Empenhado em ensinar o máximo que a física pode oferecer, embora convenhamos que o conhecimento sempre haverá o que aprender   
        </p>                   

        <footer>
            <p>preço/hora 
                <strong> R$ 60,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    );
}


export default TeacherItem;