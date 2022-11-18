import React, { useState, useEffect, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import heartIcon from '../../assets/images/icons/gray-heart.svg';
import viewContentIcon from '../../assets/images/icons/view-password.svg';
import hideContentIcon from '../../assets/images/icons/hide-password.svg';
import LayoutBackground from '../../components/LayoutBackground';

function Login() {

    const history = useHistory();

    const [showPassword, setShowPassword] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        handleInputsValue();
    }, [email, password])

    function handleInputsValue() {
        if (email == "" || password == "") {
            setIsDisabled(true)
        } else {
            setIsDisabled(false)
        }
    }

    function handleLogin(event: FormEvent) {
        event.preventDefault();

        history.push('/home');
    }

    return (
        <LayoutBackground bgSide={0} >

            <div className="form-side1">
                <form className="form" onSubmit={handleLogin}>
                    <h1>Fazer login</h1>

                    <fieldset>
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

                    <div className="more-actions">
                        <label className="check" >Lembrar-me
	                        <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>

                        <Link to="/forgot-password">
                            Esqueci minha senha
                        </Link>
                    </div>

                    <button type="submit" className={isDisabled ? "disabledButtonSubmit" : "buttonSubmit"} disabled={isDisabled}>Entrar</button>
                </form>

                <div className="new-account">
                    <div>
                        <p>Não tem conta?</p>

                        <Link to="/signup">
                            Cadastre-se
                        </Link>
                    </div>

                    <div>
                        <p>É de graça</p>
                        <img src={heartIcon} alt="Icone de coração" />
                    </div>
                </div>
            </div>

        </LayoutBackground>
    );
}

export default Login;
