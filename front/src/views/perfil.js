import React, { useEffect, useState } from 'react';
import '../assets/css/perfil.css';
import '../assets/fonts/fontawesome/css/all.min.css';
import axios from 'axios';

const Perfil = () => {
    const [dados, setDados] = useState({});
    const token = localStorage.getItem('jwtToken'); 
    
    useEffect(() => {
        axios.get('http://localhost:3000/sigap/api/dadosPolicial', {
            headers: {
                Authorization: `Bearer ${token}` 
            }
        })
        .then(response => setDados(response.data))
        .catch(error => console.error('Erro ao buscar os dados', error));
    }, [token]);

    return (
        <div className='container-prop'>
         
            <div className='header-table'>
                <h4>Proprietário da Arma</h4>
            </div>

            <div className='dadosP'>
                <div className='coluna'>
                    <p><strong>Nome:</strong> {dados.st_nome}</p>
                    <p><strong>CPF:</strong> {dados.st_cpf}</p>
                    <p><strong>Telefone:</strong> {dados.st_telefonecelular}</p>
                </div>
                <div className='coluna'>
                    <p><strong>Posto/Graduação:</strong> {dados.st_postograduacao}</p>
                    <p><strong>Email:</strong> {dados.st_email}</p>
                </div>
                <div className='coluna perfil-section'>
                    <img className='perfil' src='path_to_profile_picture' alt='foto 3x4' />
                    <p className='status'><strong>Status:</strong> {dados.st_status}</p>
                </div>
            </div>

            <div className='header-table'>
                <h4>Armas Cadastradas</h4>
            </div>

            <div className='armas-cadastradas'>
                <table>
                    <thead>
                        <tr>
                            <th>Nº Série</th>
                            <th>Espécie</th>
                            <th>Calibre</th>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Nº Sigma</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>XXXX</td>
                            <td>XXXX</td>
                            <td>XXXX</td>
                            <td>XXXX</td>
                            <td>XXXX</td>
                            <td>XXXX</td>
                        </tr>
                    </tbody>
                </table>

                <div className='acao-btn'>
                    <button>
                        <i className="fa-solid fa-hourglass-half"></i>
                        Aguardando Autorização
                    </button>
                    <button>
                        <i className="fa-solid fa-eye"></i>
                        Visualizar Histórico
                    </button>
                    <button>
                        <i className="fa-solid fa-file"></i>
                        Solicitar CRAF
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Perfil;
