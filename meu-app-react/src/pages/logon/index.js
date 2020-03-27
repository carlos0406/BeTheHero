import React, { useState } from 'react';
import './style.css';
import herosIMG from '../../assents/heroes.png';
import logoIMG from '../../assents/logo.svg';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api'

export default function Longon() {
    const [id, setId] = useState('');
    const history = useHistory();
    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('/sessions', { id });
            console.log(response.data.name);
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile')
        } catch (error) {
            alert('falha no login')
        }

    }

    return (

        <div className="logon-container">
            <section className="form">
                <img src={logoIMG} alt="be the Heros" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu longon</h1>
                    <input placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
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