import React, { useState, useEffect } from "react";
import '../assets/css/solicitarC.css';
import '../assets/fonts/fontawesome/css/all.min.css';
import axios from "axios";

const SolicitarC = () => {
    const [activeTab, setActiveTab] = useState('Orientações');
    const [dadosPessoais, setDadosPessoais] = useState({});
    const [dadosArma, setDadosArma] = useState({
        fabricante: '',
        modelo: '',
        calibre: '',
        tipo: ''
    });

    // Fetch dados pessoais ao carregar o componente
    useEffect(() => {
        const token = localStorage.getItem('jwtToken');

        axios.get('http://localhost:3000/sigap/api/dadosPolicial/', {
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

    // Manipular mudanças no formulário de Dados da Arma
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDadosArma(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Função para enviar dados da arma para o backend (api de teste para CRUD)
    const handleSave = () => {
        const token = localStorage.getItem('jwtToken');
        
        axios.post('http://localhost:3000/sigap/api/', dadosArma, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            console.log('Solicitação de compra salva:', response.data);
            alert("Solicitação de compra enviada com sucesso!");
        })
        .catch(error => {
            console.error('Erro ao salvar solicitação de compra:', error);
            alert("Erro ao enviar a solicitação de compra.");
        });
    };

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
                        {activeTab === 'Orientações' && (
                            <div className="orientacoes">
                                <h4>DOCUMENTOS NECESSÁRIOS PARA A AQUISIÇÃO DE MATERIAL BÉLICO DE USO PARTICULAR</h4>
                                {/* ...Conteúdo da aba Orientações... PEGAREMOS DO BANCO */}
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
                        
                        {activeTab === 'Dados da Arma' && (
                            <div className="dados-arma">
                                <h4>Preencha os Dados da Arma:</h4>
                                <div>
                                    <label>Fabricante:</label>
                                    <input type="text" name="fabricante" value={dadosArma.fabricante} onChange={handleChange} />
                                </div>
                                <div>
                                    <label>Modelo:</label>
                                    <input type="text" name="modelo" value={dadosArma.modelo} onChange={handleChange} />
                                </div>
                                <div>
                                    <label>Calibre:</label>
                                    <input type="text" name="calibre" value={dadosArma.calibre} onChange={handleChange} />
                                </div>
                                <div>
                                    <label>Tipo:</label>
                                    <input type="text" name="tipo" value={dadosArma.tipo} onChange={handleChange} />
                                </div>
                            </div>
                        )}
                        
                        {activeTab === 'Anexar Documentos' && // concluir forms 
                            <div className="anexarD">
                                <h4>ANEXE OS DOCUMENTOS NECESSÁRIOS PARA A AQUISIÇÃO DE MATERIAL BÉLICO</h4>
                                <div>
                                    <label>Requerimento para Aquisição de Material Bélico de Uso Particular preenchido e assinado:</label>
                                    
                                </div>
                                <div>
                                    <label>(Anexo “C”) - Calibre Permitido ou (Anexo “C1”) - Calibre Restrito:</label>
                                    
                                </div>
                                <div>
                                    <label>Cópia da identidade militar:</label>
                                    
                                </div>
                                <div>
                                    <label>Cópia do comprovante de residência:</label>
                                    
                                </div>
                                <div>
                                    <label>Laudo de aptidão psicológica apenas para inativos:</label>
                                    
                                </div>
                                <div>
                                    <label>Declaração preenchida (Anexo “G” ):</label>
                                    
                                </div>

                            </div>}
                    </div>
                
                    <div className="button-container">  
                        <button className="clear-button" onClick={() => setDadosArma({ fabricante: '', modelo: '', calibre: '', tipo: '' })}>Limpar Formulário</button>
                        <button className="save-button" onClick={handleSave}>
                            <i className="fas fa-save"></i> Salvar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolicitarC;
