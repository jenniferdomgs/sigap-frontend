import React, { useState, useEffect } from "react";
import '../assets/css/solicitarC.css';
import '../assets/fonts/fontawesome/css/all.min.css';
import axios from "axios";
import jtw from 'jsonwebtoken'; // biblioteca para mandar os dados em jwt para o backend

const SolicitarCRAF = () => { 
    const [activeTab, setActiveTab] = useState('Orientações');
    const [dadosPessoais, setDadosPessoais] = useState({
        
    });

    
     useEffect(() => {
         axios.get('http://localhost:3000/sigap/api/')
             .then(response => setDadosPessoais(response.data))
             .catch(error => console.error('Erro ao buscar dados pessoais:', error));
     }, []);

    
    return (
        <div>
            <div className="containerSolicitar">
                <h2>SOLICITAR CRAF</h2>
                <div className="tab-container">
                    <div className="tabs">
                        <button 
                            className={activeTab === 'Orientações' ? 'active' : ''} 
                            onClick={() => setActiveTab('Orientações')}>
                            Orientações
                        </button>
                        <button 
                            className={activeTab === 'Dados Pessoais' ? 'active' : ''} 
                            onClick={() => setActiveTab('Dados Pessoais')}>
                            Dados Pessoais
                        </button>
                        <button 
                            className={activeTab === 'Dados da Arma' ? 'active' : ''} 
                            onClick={() => setActiveTab('Dados da Arma')}>
                            Dados da Arma
                        </button>
                        <button 
                            className={activeTab === 'Anexar Documentos' ? 'active' : ''} 
                            onClick={() => setActiveTab('Anexar Documentos')}>
                            Anexar Documentos
                        </button>
                    </div>

                    <div className="tab-content">
                        {activeTab === 'Orientações' && <p>Conteúdo de Orientações</p>}
                        
                        {activeTab === 'Dados Pessoais' && (
                            <div className="dados-pessoais">
                                <h3>DADOS PESSOAIS</h3>
                                <div className="dados-pessoais-section">
                                    <div className="dados-col">
                                        <p><strong>Nome:</strong> {dadosPessoais.st_nome}</p>
                                        <p><strong>Posto/Graduação:</strong> {dadosPessoais.st_postograduacao}</p>
                                        <p><strong>Unidade:</strong> {dadosPessoais.st_unidade}</p>
                                    </div>
                                    <div className="dados-col">
                                        <p><strong>CPF:</strong> {dadosPessoais.st_cpf}</p>
                                        <p><strong>Matrícula:</strong> {dadosPessoais.st_matricula}</p>
                                        <p><strong>Email:</strong> {dadosPessoais.st_email}</p>

                                        <p><strong>Telefone:</strong> {dadosPessoais.st_telefonecelular}</p>
                                    </div>
                                </div>

                                
                            </div>
                        )}
                        
                        {activeTab === 'Dados da Arma' && <p>Conteúdo de Dados da Arma</p>}
                        {activeTab === 'Anexar Documentos' && <p>Conteúdo de Anexar Documentos</p>}
                    </div>
                
                    <div className="button-container">  
                        <button className="clear-button">Limpar Formulário</button>
                        <button className="save-button">
                            <i className="fas fa-save"></i> Salvar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolicitarCRAF;
