import React, { useEffect, useState } from 'react';
import Table from '../components/table';
import '../styles/historico.css';

const Historico = ({ usuario }) => {
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    if (usuario) {
      const historicoSalvo = JSON.parse(localStorage.getItem(`historico-${usuario.nome}`)) || [];
      setHistorico(historicoSalvo);
    }
  }, [usuario]);

  const formatarRegistro = (registro) => {
    const meta = usuario.peso * 35;
    const atingiuMeta = parseInt(registro.quantidade) >= meta;
    
    return [
      { label: 'Data', value: registro.data },
      { label: 'Meta', value: `${meta}ml` },
      { label: 'Quantos mls tomou?', value: `${registro.quantidade}ml` },
      { label: 'Chegou na meta?', value: atingiuMeta ? 'Sim' : 'Não' },
    ];
  };

  return (
    <div className="historico-container">
      <h1>Histórico de Consumo</h1>
      <h2>{usuario?.nome || 'Usuário'}</h2>
      
      {historico.map((registro, index) => (
        <div key={index} className="registro-historico">
          <Table data={formatarRegistro(registro)} />
        </div>
      ))}
    </div>
  );
};

export default Historico;