import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../assets/css/login.css';
import '../assets/fonts/fontawesome/css/all.min.css';
import axios from 'axios';

const KJUR = require('jsrsasign');

const Login = () => {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [credenciais, setCredenciais] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/sigap/api/')
      .then(response => setCredenciais(response.data))
      .catch(error => console.error('Credenciais Incorretas!', error));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const payload = {
      cpf: cpf,
      senha: senha
    };

    const header = { alg: 'HS256', typ: 'JWT' };
    const secretKey = 'thesecretkey'; 

    const sHeader = JSON.stringify(header);
    const sPayload = JSON.stringify(payload);
    const token = KJUR.jws.JWS.sign('HS256', sHeader, sPayload, secretKey);

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }; 

    axios.post('http://localhost:3000/sigap/api/login', {}, headers)
      .then(response => {
        console.log('Login bem-sucedido:', response.data);
        localStorage.setItem('token', token); // salvando o token no localstorage
        navigate('/SolicitarCompra'); 
      })
      .catch(error => {
        console.error('Erro ao fazer login:', error);
      });
  };

  return (
    <div className="container">
      <h2>Inicie uma Sessão:</h2>
      <form onSubmit={handleLogin}>
        <label className="label">
          CPF: <span className="required">*</span>
        </label>
        <input 
          type="text" 
          placeholder="XXXXXXXXXXX" 
          value={cpf}
          onChange={(e) => setCpf(e.target.value)} 
          required 
        />
        <label>
          Senha: <span className='required'>*</span>
        </label>
        <input 
          type="password" 
          placeholder="********" 
          value={senha}
          onChange={(e) => setSenha(e.target.value)} 
          required 
        />
        <button type="submit">Entrar <i className="fa-solid fa-sign-in-alt"></i></button>
      </form>
    </div>
  );
};


export default Login;

