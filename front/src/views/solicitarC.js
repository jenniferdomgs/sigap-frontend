import React, { useState, useEffect } from "react";
import '../assets/css/solicitarC.css';
import '../assets/fonts/fontawesome/css/all.min.css';

const SolicitarC = () => { //Exemplo (enquanto o backend não estiver integrado)
    const [activeTab, setActiveTab] = useState('Orientações');
    const [dadosPessoais, setDadosPessoais] = useState({
        nome: 'Tereza Stephanny de Brito Félix',
        cpf: 'xxx.xxx.xxx-xx',
        identidade: 'xxx.xxx.xxx-xx',
        dataNascimento: 'xx/xx/xxxx',
        email: 'fulanodetal@gmail.com',
        matricula: 'xxx.xxx.xxx-xx',
        unidade: 'DTIC',
        telefone: '(xx) xxxxx-xxxx',
        endereco: {
            logradouro: 'Rua lalala lala lala',
            numero: '101',
            bairro: 'Bairro lalala lala lala',
            cidade: 'Cidade lalala lala lala',
            cep: 'xxxxxx-xxx',
            uf: 'RN'
        }
    });

    // Integração com o Backend
    // useEffect(() => {
    //     axios.get('URL_DO_BACKEND')
    //         .then(response => setDadosPessoais(response.data))
    //         .catch(error => console.error('Erro ao buscar dados pessoais:', error));
    // }, []);

    
    return (
        <div>
            <div className="containerSolicitar">
                <h2>SOLICITAR AUTORIZAÇÃO DE COMPRA</h2>
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
                                        <p><strong>Nome:</strong> {dadosPessoais.nome}</p>
                                        <p><strong>Identidade:</strong> {dadosPessoais.identidade}</p>
                                        <p><strong>Data de Nascimento:</strong> {dadosPessoais.dataNascimento}</p>
                                        <p><strong>Email:</strong> {dadosPessoais.email}</p>
                                    </div>
                                    <div className="dados-col">
                                        <p><strong>CPF:</strong> {dadosPessoais.cpf}</p>
                                        <p><strong>Matrícula:</strong> {dadosPessoais.matricula}</p>
                                        <p><strong>Unidade:</strong> {dadosPessoais.unidade}</p>
                                        <p><strong>Telefone:</strong> {dadosPessoais.telefone}</p>
                                    </div>
                                </div>

                                <h3>ENDEREÇO</h3>
                                <div className="endereco-section">
                                    <div className="dados-col">
                                        <p><strong>Logradouro:</strong> {dadosPessoais.endereco.logradouro}</p>
                                        <p><strong>Número:</strong> {dadosPessoais.endereco.numero}</p>
                                    </div>
                                    <div className="dados-col">
                                        <p><strong>Bairro:</strong> {dadosPessoais.endereco.bairro}</p>
                                        <p><strong>Cidade:</strong> {dadosPessoais.endereco.cidade}</p>
                                    </div>
                                    <div className="dados-col">
                                        <p><strong>CEP:</strong> {dadosPessoais.endereco.cep}</p>
                                        <p><strong>UF:</strong> {dadosPessoais.endereco.uf}</p>
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
