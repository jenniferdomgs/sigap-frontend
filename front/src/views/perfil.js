import React, { useEffect } from 'react';
import '../assets/css/perfil.css';
import '../assets/fonts/fontawesome/css/all.min.css';
import axios from 'axios';
import jtw from 'jsonwebtoken'; // biblioteca para mandar os dados em jwt para o backend


const Perfil = () => {

    useEffect(() => {
        axios.get('http://localhost:3000/sigap/api/')
            .then(response => setDados(response.data))
            .catch(error => console.error('Erro ao buscar os dados', error));
    }, []);

    return (
        <div className='container-prop'>
         
            <div className='header-table'>
                <h4>Proprietário da Arma</h4>
                <i className="fa-solid fa-pen-to-square"></i>
            </div>

            <div className='dadosP'>
                <div className='coluna'>
                    <p><strong>Nome:</strong>{Dados.st_nome}</p>
                    <p><strong>CPF:</strong>{Dados.st_cpf}</p>
                    <p><strong>Telefone:</strong>{Dados.st_telefonecelular}</p>
                </div>
                <div className='coluna'>
                    <p><strong>Posto/Graduação:</strong>{Dados.st_postograduacao}</p>
                    <p><strong>Email:</strong>{Dados.st_email}</p>
                </div>
                <div className='coluna perfil-section'>
                    <img className='perfil' src='path_to_profile_picture' alt='foto 3x4' />
                    <p className='status'><strong>Status:</strong>{Dados.st_status}</p>
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
