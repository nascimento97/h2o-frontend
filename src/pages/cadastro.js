import React, { useState } from 'react';
import Input from '../components/input';
import Button from '../components/button';
import '../styles/cadastro.css';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [peso, setPeso] = useState('');

  const handleCadastro = () => {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push({ nome, peso });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert('Cadastro realizado com sucesso!');
    setNome('');
    setPeso('');
  };

  return (
    <div className="cadastro-container">
      <h1>Cadastro de Usuário</h1>
      <Input
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <Input
        placeholder="Digite seu peso (kg)"
        type="number"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />
      <Button onClick={handleCadastro}>Confirmar Cadastro</Button>
    </div>
  );
};

export default Cadastro;