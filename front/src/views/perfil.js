import React from 'react';
import '../assets/css/perfil.css'
import '../assets/fonts/fontawesome/css/all.min.css'

const Perfil = () => {
    return (
        <div className='container-prop'>
            <div className='header-table'>
                <h4>Proprietário da Arma</h4>
                <i class="fa-solid fa-pen-to-square"></i>
            </div>

            <div className='dadosP'>
                <div>
                    <p>Nome:</p>
                    <p>CPF:</p>
                    <p>Telefone:</p>
                </div>
                    
                <div>
                    <p>Identidade:</p>
                    <p>Email:</p>
                </div>

                <div>
                    <img className='perfil' alt='foto 3x4'></img>
                </div>
            </div>
        </div>
        
    );
};

export default Perfil;