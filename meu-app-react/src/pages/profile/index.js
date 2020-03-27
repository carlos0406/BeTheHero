import React, { useEffect, useState } from 'react';
import './style.css';
import logoIMG from '../../assents/logo.svg';
import { Link, useHistory } from 'react-router-dom'
import { FiPower } from 'react-icons/fi'
import { FiTrash2 } from 'react-icons/fi'
import api from '../../services/api'
export default function Profile() {
    const [incidentes, setIncidents] = useState([]);
    const history = useHistory();
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');


    function handleLogout() {
        localStorage.clear();
        history.push('/')
    }
    async function handleDelete(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            })
            setIncidents(incidentes.filter(incident => incident.id !== id));
        } catch (error) {
            console.log(error)
            alert('Erro ao deletar caso')
        }

    }

    useEffect(
        () => {
            api.get('profile', {
                headers: {
                    Authorization: ongId
                }
            }).then(response => {
                setIncidents(response.data)
            })
        },
        [ongId]

    );
    return (
        <div className="profile-container">
            <header>
                <img src={logoIMG} alt="Logo" />
                <span>Bem vinda, {ongName}</span>
                <Link className="button" to='incidents/new'>
                    Cadastrar novo caso
                </Link>

                <button onClick={handleLogout}>
                    <FiPower size={18} color="#E02041" />
                </button>

            </header>
            <h1>Casos cadastrados</h1>

            <ul>
                {incidentes.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>
                        <strong> DESCRICAO</strong>
                        <p>{incident.description}</p>
                        <strong>VALOR :</strong>
                        <p> {Intl.NumberFormat('pt-br', {
                            style: 'currency', currency: 'BRL'

                        }).format(incident.value)}</p>

                        <button type='button' onClick={() => handleDelete(incident.id)} >
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}






            </ul>


        </div>
    );
}