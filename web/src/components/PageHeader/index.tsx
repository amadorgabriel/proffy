import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';
import rocketEmoji from '../../assets/images/icons/rocket-emoji.svg';
import foundEmoji from '../../assets/images/icons/found-icon.svg'
import './styles.css';

//Interface modela um objeto
interface PageHeaderProps {
    title: string,
    description?: string
}

//A constante é do tipo FunctionComponent(FC) e leva como parâmetro o obj acima
const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/home">
                    <img src={backIcon} alt="Voltar" />
                </Link>

                <p>Dar aulas</p>

                <img src={logoImg} alt="Proffy" />
            </div>

            <div className="header-content">
                <div>
                    <strong>
                        {props.title}
                    </strong>
                    {!props.description &&
                        <div className="emoji-title-area">
                            <img src={foundEmoji} alt="Emoji Sorridente" />
                            <p>
                                Nós temos 32
                                <br />
                                professores.
                            </p>
                        </div>
                    }
                </div>

                {/* Descrição */}
                {props.title &&
                    <div>
                        <p>
                            {props.description}
                        </p>

                        {props.description ?
                            <div className="emoji-area">
                                <img src={rocketEmoji} alt="Foguete" />
                                <p>
                                    Preparare-se!
                                    <br />
                                    vai ser o máximo.
                                </p>
                            </div>
                            :
                            props.description
                        }
                    </div>
                }

                {props.children}
            </div>
        </header>
    );
}


export default PageHeader;