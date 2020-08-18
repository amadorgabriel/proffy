import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import arrowBackIcon from '../../assets/images/icons/arrow-back.svg'
import viewContentIcon from '../../assets/images/icons/view-password.svg';
import hideContentIcon from '../../assets/images/icons/hide-password.svg';
import LayoutBackground from '../../components/LayoutBackground';

function SignUp() {

    const [showPassword, setShowPassword] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        handleInputsValue();
    }, [nome, sobrenome, email, password])


    function handleInputsValue() {
        if (email == "" || password == "" || nome == "" || sobrenome == "") {
            setIsDisabled(true)
        } else {
            setIsDisabled(false)
        }
    }

    return (
        <LayoutBackground bgSide={1}>

            <div className="form-side2">
                <div className="divBack">
                    <Link to="/">
                        <img className="arrow-back" src={arrowBackIcon} alt="Voltar" />
                    </Link>
                </div>

                <form className="form">
                    <h1>Cadastro</h1>
                    <p>Preencha os dados abaixo para começar.</p>

                    <fieldset>
                        <div className="block-input">
                            <input
                                type="text"
                                name="nome"
                                onChange={(e) => setNome(e.target.value)}
                                autoComplete="off"
                                required
                            />
                            <label htmlFor="nome" className="label-input">
                                <span className="content-name">Nome</span>
                            </label>
                        </div>

                        <div className="block-input">
                            <input
                                type="text"
                                name="sobrenome"
                                onChange={(e) => setSobrenome(e.target.value)}
                                autoComplete="off"
                                required
                            />
                            <label htmlFor="email" className="label-input">
                                <span className="content-name">Sobrenome</span>
                            </label>
                        </div>
                        <div className="block-input">
                            <input
                                type="text"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="off"
                                required
                            />
                            <label htmlFor="email" className="label-input">
                                <span className="content-name">E-mail</span>
                            </label>
                        </div>
                        <div className="block-input">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="senha"
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="off"
                                required
                            />

                            <label htmlFor="senha" className="label-input">
                                <span className="content-name">Senha</span>
                            </label>

                            <div className="input-password">
                                {showPassword
                                    ? <img
                                        src={hideContentIcon}
                                        alt="Esconder conteúdo"
                                        onClick={(e) => { setShowPassword(false) }}
                                    />
                                    : <img
                                        src={viewContentIcon}
                                        alt="Mostrar conteúdo"
                                        onClick={(e) => { setShowPassword(true) }}
                                    />
                                }
                            </div>

                        </div>
                    </fieldset>

                    <button
                        type="submit"
                        className={isDisabled ? "disabledButtonSubmit" : "buttonSubmit"}
                        disabled={isDisabled}
                    >
                        Concluir cadastro
                    </button>
                </form>
            </div>

        </LayoutBackground>
    );
}

export default SignUp;
