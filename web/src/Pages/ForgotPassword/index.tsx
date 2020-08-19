import React, { useState, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import './styles.css';
import arrowBackIcon from '../../assets/images/icons/arrow-back.svg'
import LayoutBackground from '../../components/LayoutBackground';
import { DataSucessProps } from '../../components/SucessPage/index';


function ForgotPassword() {

    const history = useHistory();

    const [email, setEmail] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);


    useEffect(() => {
        handleInputsValue();
    }, [email]);


    function handleInputsValue() {
        if (email == "") {
            setIsDisabled(true)
        } else {
            setIsDisabled(false)
        }
    }

    function handleSendEmail(event: FormEvent) {
        event.preventDefault();

        DataSucessProps.title = "Redefinição enviada";
        DataSucessProps.description = 'Boa, agora é só checar o e-mail que foi enviado para você redefinir sua senha e aproveitar os estudos.';
        DataSucessProps.buttonText = 'Voltar ao login';
        DataSucessProps.redirectButton = '/';

        history.push('/sucess');
    }

    return (
        <LayoutBackground bgSide={1}>

            <div className="form-side2">
                <div className="back-div">
                    <Link to="/">
                        <img className="arrow-back" src={arrowBackIcon} alt="Voltar" />
                    </Link>
                </div>

                <form onSubmit={handleSendEmail} className="form">
                    <h1 className="h1">Eita, esqueceu sua senha?</h1>
                    <p className="description" >Não esquenta vamos dar um jeito nisso.</p>

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

export default ForgotPassword;
