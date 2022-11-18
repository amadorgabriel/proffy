import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import exitIcon from '../../assets/images/icons/exit-button.svg';

import './styles.css';


export default function Landing() {

    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
            const { total } = response.data;

            setTotalConnections(total);
        })
    }, []);


    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="user-bar">
                    <div className="users-info">
                        <img src="https://lh3.googleusercontent.com/ogw/ADGmqu9zKSlJ5S0-20poe2wj2MHNmSASZCiyR9-Q15eU=s83-c-mo" alt="Imagem perfil" />
                        <p>Gabriel Amador</p>
                    </div>

                    <button onClick={(e) => alert('Você saiu!')} className="logout-btn">
                        <img src={exitIcon} alt="Sair" />
                    </button>
                </div>

                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img
                    src={landingImg}
                    alt="Plataforma de estudos"
                    className="hero-image"
                />
            </div>

            <div className="subinfo">
                <div className="buttons-container">
                    <Link to="/study" className="study" >
                        <img src={studyIcon} alt="Estudar" />Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes" >
                        <img src={giveClassesIcon} alt="Dar aulas" />Dar aulas
                    </Link>
                </div>

                <div className="texts-info">
                    <span className="total-connections">
                        Total de {totalConnections} conexões já realizadas
                    <img src={purpleHeartIcon} alt="Coração Roxo" />
                    </span>

                    <span className="welcome">
                        Seja bem-vindo.
                    <br />
                        <p> O que deseja fazer?</p>
                    </span>
                </div>
            </div>
        </div>
    )
}