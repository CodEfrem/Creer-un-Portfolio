import React from 'react';
import './works.css';
import Avatar1 from '../../../public/img ecf/avatar1.png';
import Avatar2 from '../../../public/img ecf/avatar2.png';

const Works = () => {
    return (
        <section id='works'>
            <h2 className='workstitle'>Mon Portfolio</h2>
            <span className="worksDesc">Je prends plaisir à prêter attention aux moindres détails et à m'assurer que mon travail est parfaitement réalisé. J'ai hâte de mettre mes compétences et mon expérience au service des entreprises pour les aider à atteindre leurs objectifs et à créer une forte présence en ligne.</span>
            <div className="worksImg">
                <img src={Avatar1} alt="Work 1" className="worksImg" />
                <img src={Avatar2} alt="Work 2" className="worksImg" />
            </div>
            <button className="works">See More</button>
        </section>
    );
}

export default Works;
