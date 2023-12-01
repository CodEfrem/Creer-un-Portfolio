import React from 'react';
import './intro.css';

const Intro = () => {
    return (
        <section id="intro">
            <div className='introContent'>
                <span className='hello'>Bonjour</span>
                <span className='introText'> je suis<span className='introName'> Developpeur d'Application Web</span>
                </span>
                <p className='introPara'> Je suis un concepteur de sites Web qualifié et expérimenté dans la création de sites Web visuellement attrayants et conviviaux.</p>
                <button className='btn'>Embauchez Moi</button>
            </div>
        </section>
    )
}

export default Intro;
