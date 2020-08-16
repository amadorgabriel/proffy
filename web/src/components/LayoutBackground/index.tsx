import React, { useState } from 'react';

import './styles.css';
import logo from '../../assets/images/logo.svg';
import heartIcon from '../../assets/images/icons/gray-heart.svg';
import viewContentIcon from '../../assets/images/icons/view-password.svg';
import hideContentIcon from '../../assets/images/icons/hide-password.svg';

function LayoutBackground() {

    const [showPassword, setShowPassword] = useState(false);

    

    return (
        <div className="containaer" >
            <div className="background-side">
                <div className="bg-content" >
                    <img src={logo} alt="background Fundo" />
                    <p>Sua plataforma de estudos online.</p>
                </div>
            </div>

            <div className="form-side">
                <form className="form">
                    <h1>Fazer login</h1>

                    <fieldset>
                        <div className="block-input">
                            <input type="email" name="email" autoComplete="off" required />
                            <label htmlFor="email" className="label-input">
                                <span className="content-name">E-mail</span>
                            </label>
                        </div>

                        <div className="block-input">
                                <input type={showPassword ? "text" : "password"} name="senha" autoComplete="off" required />
                            {/* <div className="input-password">
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
                            </div> */}

                            <label htmlFor="senha" className="label-input">
                                <span className="content-name">Senha</span>
                            </label>

                        </div>
                    </fieldset>

                    <div className="more-actions">
                        <label className="check" >Lembrar-me
	                        <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>

                        <a href="#">Esqueci minha senha</a>
                    </div>

                    <button type="submit">Entrar</button>
                </form>

                <div className="new-account">
                    <div>
                        <p>Não tem conta?</p>
                        <a href="#">Cadastre-se</a>
                    </div>

                    <div>
                        <p>É de graça</p>
                        <img src={heartIcon} alt="Icone de coração" />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default LayoutBackground;