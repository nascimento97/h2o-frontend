import React, { useState } from 'react';
import Input from '../components/input';
import Button from '../components/button';
import '../styles/login.css';

const Login = ({ onLogin }) => {
  const [nome, setNome] = useState('');

  const handleLogin = () => {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuario = usuarios.find((u) => u.nome === nome);
    
    if (usuario) {
      localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
      onLogin(usuario);
    } else {
      alert('Usuário não encontrado!');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <Input
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default Login;