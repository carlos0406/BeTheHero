import React from 'react';
import './style.css';
import logoIMG from '../../assents/logo.svg';
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
export default function register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoIMG} alt="Heros" />
                    <h1>Cadastro</h1>
                    <p>Faça sei cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    < Link className='back-link' to="/"> <FiArrowLeft size={16} color="#e02041" />
                    Já tenho cadastro</Link>
                </section>
                <form action="">
                    <input type="text" placeholder='Nome da ONG' />
                    <input type="email" placeholder='E-mail' />
                    <input placeholder="Whatsapp" />
                    <div className="input-group">
                        <input placeholder="Cidade" />
                        <input placeholder="UF" style={{ width: 80 }} />
                    </div>
                    <button className='button' type='submite'>Cadastrar</button>
                </form>

            </div>

        </div>

    );
}