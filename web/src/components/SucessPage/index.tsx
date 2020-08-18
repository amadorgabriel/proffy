import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import './styles.css'
import doneIcon from '../../assets/images/icons/done.svg';

// export interface SucessPageProps {
//     title: string,
//     description?: string,
//     buttonText: string,
//     redirectButton: string
// }

export var DataSucessProps = {
    title: '',
    description: '',
    buttonText: '',
    redirectButton: ''
}

function SucessPage(){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [redirectButton, setRedirectButton] = useState('');
    const [buttonText, setButtonText] = useState('');

    useEffect(() =>{
        setTitle(DataSucessProps.title);
        setDescription(DataSucessProps.description);
        setRedirectButton(DataSucessProps.redirectButton);
        setButtonText(DataSucessProps.buttonText)

    },[DataSucessProps])

    return (
        <div className="sucess-bg">
            <div>
                <img src={doneIcon} alt="Feito" />
                <h1>{title}</h1>
                <p>{description}</p>
                <Link to={redirectButton}>
                    <button>{buttonText}</button>
                </Link>
            </div>
        </div>
    );
}

export default SucessPage;