import React, { useRef, useState } from 'react';
import './contact.css';
import Linkedin from '../../../public/img ecf/linkedin.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [errors, setErrors] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);

    const validateForm = () => {
        const validateName = () => {
            const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]+$/; 
            if (!form.current['your_name'].value.trim() || !nameRegex.test(form.current['your_name'].value)) {
                return "Veuillez entrer un nom valide.";
            }
            return "";
        };

        const validateEmail = () => {
            const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
            if (!form.current['your_email'].value.trim() || !emailRegex.test(form.current['your_email'].value)) {
                return "Veuillez entrer une adresse e-mail valide.";
            }
            
            if (!form.current['your_email'].value.trim().endsWith('.fr') && !form.current['your_email'].value.trim().endsWith('.com')) {
                return "L'email doit se terminer par '.fr' ou '.com' pour valider le formulaire.";
            }
            return "";
        };

        const validateMessage = () => {
            if (!form.current['message'].value.trim()) {
                return "Le message ne peut pas être vide.";
            }
            return "";
        };

        const nameError = validateName();
        const emailError = validateEmail();
        const messageError = validateMessage();

        setErrors({
            name: nameError,
            email: emailError,
            message: messageError,
        });

        return !nameError && !emailError && !messageError;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (validateForm()) {
            emailjs.sendForm('service_7ef1tb4', 'template_4qczonm', form.current, 'BqGM1unEo0IoPdfzX')
                .then((result) => {
                    console.log(result.text);
                    // Afficher une alerte de succès ici
                    alert("Votre message a été envoyé avec succès !");
                }, (error) => {
                    console.log(error.text);
                });

            setFormSubmitted(true);
        }
    };

    return (
        <section id='contactPage'>
            <div id='contact'>
                <h1 className='contactPageTitle'>Contactez Moi</h1>
                <span className="contactDesc">Veuillez remplir le formulaire ci-dessous pour discuter de toute opportunité de travail.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        className={`name ${errors.name && 'error'}`}
                        placeholder='Your Name'
                        name='your_name'
                    />
                    {errors.name && <span className="errorText">{errors.name}</span>}

                    <input
                        type="email"
                        className={`email ${errors.email && 'error'}`}
                        placeholder='Your Email'
                        name='your_email'
                    />
                    {errors.email && <span className="errorText">{errors.email}</span>}

                    <textarea
                        name="message"
                        rows='5'
                        className={`message ${errors.message && 'error'}`}
                        placeholder='Your Message'
                    ></textarea>
                    {errors.message && <span className="errorText">{errors.message}</span>}

                    <button type='submit' value='Send' className="submitBtn">Envoyer</button>
                    <div className='links'>
                        <img src={Linkedin} alt="Linkedin" className='link' />
                    </div>
                </form>

                {formSubmitted && <p className="successMessage">Votre message a été envoyé avec succès !</p>}
            </div>
        </section>
    );
};

export default Contact;
