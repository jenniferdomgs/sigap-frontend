import React, { useState, useEffect } from "react";
import '../assets/css/solicitarC.css';
import '../assets/fonts/fontawesome/css/all.min.css';
import axios from "axios";

// atualmente está o mesmo template que SolicitarCompra (sofrerá alterações)


const SolicitarC = () => { 
    const [activeTab, setActiveTab] = useState('Orientações');
    const [dadosPessoais, setDadosPessoais] = useState({});

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
    
        axios.get('http://localhost:3000/sigap/api/dadosPolicial', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            console.log('Dados pessoais recebidos:', response.data); 
            setDadosPessoais(response.data);
        })
        .catch(error => console.error('Erro ao buscar dados pessoais:', error));
    }, []);

    return (
        <div>
            <div className="containerSolicitar">
                <h2>SOLICITAR  CRAF</h2>
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
                        {activeTab === 'Orientações' && (
                            <div className="orientacoes">
                                <h4>DOCUMENTOS NECESSÁRIOS PARA A AQUISIÇÃO DE MATERIAL BÉLICO DE USO PARTICULAR</h4>
                                <ul>
                                    <li>Requerimento para Aquisição de Material Bélico de Uso Particular preenchido e assinado;</li>
                                    <li>(Anexo “C”) - Calibre Permitido ou (Anexo “C1”) - Calibre Restrito;</li>
                                    <li>Cópia da identidade militar;</li>
                                    <li>Cópia do comprovante de residência;</li>
                                    <li>Laudo de aptidão psicológica apenas para inativos;</li>
                                    <li>Declaração preenchida (Anexo “G” );</li>
                                    <li>Comprovante de pagamento da Guia de Recolhimento da União – GRU;</li>
                                    <li>Certidões negativas (Justiça Estadual, Justiça Federal e DJD);</li>
                                </ul>
                                <p><strong>[1]</strong> Acesse o site <a href="http://consulta.tesouro.fazenda.gov.br/gru_novosite/gru_simples.asp" target="_blank" rel="noopener noreferrer">consulta.tesouro.fazenda.gov.br</a> e preencha os campos indicados com as especificações:
                                <ul>
                                    <li>Unidade Gestora: 167086;</li>
                                    <li> Gestão: 00001 - Tesouro Nacional; </li>
                                    <li>Nome da Unidade: Fundo do Exército;</li>
                                    <li>Código de Recolhimento: 11300-0 – Taxa Fisc. Produtos Controlados Exército;</li>
                                    <li>Na página seguinte, Preencha:</li>
                                        <ol>
                                            <li>Número de referência: 20741; </li>
                                            <li>Nome Completo;</li>
                                            <li>CPF do Interessado;</li>
                                            <li>Anexe o Comprovante do Pagamento *</li> ler portaria e entender onde estão os dados para o pagamento 
                                        </ol>
                                </ul>
                                </p>
                            </div>
                        )}
                        
                        {activeTab === 'Dados Pessoais' && (
                            <div className="dados-pessoais">
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
                         
export default SolicitarC;

