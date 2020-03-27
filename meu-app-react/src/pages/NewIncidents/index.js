import React, { useState } from 'react';
import './style.css';
import logoIMG from '../../assents/logo.svg';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api'
export default function NewIncidents() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [value, setValue] = useState("")
    const ongId = localStorage.ongId
    const history = useHistory();

    async function handleIncident(e) {
        e.preventDefault();
        const data = {
            title,
            description,
            value,
        }

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })
            history.push('/profile')

        } catch (error) {
            alert('Erro ao cadastrar caso')
        }

    }


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

                <form onSubmit={handleIncident}>

                    <input type="text" placeholder='Titulo do caso'
                        value={title} onChange={e => setTitle(e.target.value)}
                    />

                    <textarea placeholder='Descrição'
                        value={description} onChange={e => setDescription(e.target.value)}
                    />
                    <input placeholder="Valor em reais"
                        value={value} onChange={e => setValue(e.target.value)}
                    />


                    <button className='button' >Cadastrar</button>
                </form>

            </div>

        </div>
    );

}