import React from 'react';
import './style.css';
import herosIMG from '../../assents/heroes.png';
import logoIMG from '../../assents/logo.svg';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom'

export default function longon() {
    return (

        <div className="logon-container">
            <section className="form">
                <img src={logoIMG} alt="be the Heros" />
                <form action="">
                    <h1>Faça seu longon</h1>
                    <input placeholder="Sua ID" />
                    <button type="submit" className="button">
                        Entrar
                    </button>
                    < Link className='back-link' to="/register"> <FiLogIn size={16} color="#e02041" />
                    Não tenho cadastro</Link>

                </form>


            </section>


            <img src={herosIMG} alt="Heros" />

        </div >

    );
}