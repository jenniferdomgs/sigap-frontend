import React from 'react';
import '../assets/css/login.css'
import '../assets/fonts/fontawesome/css/all.min.css'

const Login = () => {
  return (
    <div className="container">
        <h2>Inicie uma Sessão:</h2>
        <form>
            <label className="label">
              CPF: <span className="required">*</span>
            </label>
            <input type="text" placeholder="XXXXXXXXXXX" />
            <label>
              Senha: <span className='required'>*</span>
            </label>
            <input type="password" placeholder="********" />
            <button type="submit">Entrar <i className="fa-solid fa-sign-in-alt"></i></button>
        </form>
    </div>
  );
};

export default Login;
