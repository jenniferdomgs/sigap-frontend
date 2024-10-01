import React from 'react';
import '../assets/css/perfil.css';
import '../assets/fonts/fontawesome/css/all.min.css';

const Perfil = () => {
    return (
        <div className='container-prop'>
         
            <div className='header-table'>
                <h4>Proprietário da Arma</h4>
                <i className="fa-solid fa-pen-to-square"></i>
            </div>

            <div className='dadosP'>
                <div className='coluna'>
                    <p><strong>Nome:</strong></p>
                    <p><strong>CPF:</strong></p>
                    <p><strong>Telefone:</strong></p>
                </div>
                <div className='coluna'>
                    <p><strong>Identidade:</strong></p>
                    <p><strong>Email:</strong></p>
                </div>
                <div className='coluna perfil-section'>
                    <img className='perfil' src='path_to_profile_picture' alt='foto 3x4' />
                    <p className='status'><strong>Status:</strong> Ativo</p>
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
