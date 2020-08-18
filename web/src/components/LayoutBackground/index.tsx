import React from 'react';

import './styles.css';
import logo from '../../assets/images/logo.svg';

interface LayoutBackgroundProps {
    bgSide: number
}

const LayoutBackground: React.FC<LayoutBackgroundProps> = (props) => {

    return (
        <div className="containaer" >
            {props.bgSide === 0
                ?
                <div>
                    <div className="background-side">
                        <div className="bg-content" >
                            <img src={logo} alt="background Fundo" />
                            <p>Sua plataforma de estudos online.</p>
                        </div>
                    </div>

                    {props.children}
                </div>

                :
                <div>
                    {props.children}
                    <div className="background-side">
                        <div className="bg-content" >
                            <img src={logo} alt="background Fundo" />
                            <p>Sua plataforma de estudos online.</p>
                        </div>
                    </div>
                </div>

            }

        </div>
    );
}

export default LayoutBackground;