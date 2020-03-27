import React from 'react';
import './style.css';
import logoIMG from '../../assents/logo.svg';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

export default function newIncidents() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoIMG} alt="Heros" />
                    <h1>Cadastrar novo caso</h1>
                    <p>
                        Descreva o caso detalhadamente para encontrar um heroi para resolver isso.
                    </p>
                    < Link className='back-link' to="/profile"> <FiArrowLeft size={16} color="#e02041" />
                   Voltar para Home</Link>
                </section>
                <form action="">
                    <input type="text" placeholder='Titulo do caso' />
                    <textarea placeholder='Descrição' />
                    <input placeholder="Valor em reais" />


                    <button className='button' type='submite'>Cadastrar</button>
                </form>

            </div>

        </div>
    );

}