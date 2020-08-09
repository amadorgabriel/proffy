import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';
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
                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logoImg} alt="Proffy" />
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                {props.title && <p> {props.description}</p> }

                {props.children}
            </div>
        </header>
    );
}


export default PageHeader;