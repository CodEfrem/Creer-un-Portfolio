import React from "react";
import './competences.css';

const Competences = () => {
    return (
        <section id="competences">
            <span className="competencesTitle">Ce que je fais</span>
            <span className="competencesDesc">En tant que développeur d'application web, mes compétences s'étendent à</span>
            <div className="competencesBars">
                <div className="competencesBar">
                    <div className="competencesBarText">
                        <h2>Conception UI/UX</h2>
                        <p>Expérience approfondie dans la conception d'interfaces utilisateur attrayantes et conviviales.</p>
                    </div>
                </div>
                <div className="competencesBar">
                    <div className="competencesBarText">
                        <h2>Conception de Sites Web</h2>
                        <p>Création de sites web performants et responsifs pour répondre aux besoins clients.</p>
                    </div>
                </div>
                <div className="competencesBar">
                    <div className="competencesBarText">
                        <h2>Conception d'Applications</h2>
                        <p>Développement d'applications web robustes et efficaces.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Competences;
