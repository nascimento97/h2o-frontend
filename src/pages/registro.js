import React, { useState, useEffect } from 'react';
import RadioGroup from '../components/radiogroup';
import Button from '../components/button';
import Table from '../components/table';
import '../styles/registro.css';

const Registro = ({ usuario }) => {
  const [dose, setDose] = useState('200');
  const [historico, setHistorico] = useState([]);
  const [meta, setMeta] = useState(0);

  const opcoesDose = [
    { value: '200', label: '200ml' },
    { value: '350', label: '350ml' },
    { value: '500', label: '500ml' },
  ];

  useEffect(() => {
    // Calcular meta baseada no peso (35ml por kg)
    if (usuario && usuario.peso) {
      const novaMeta = Math.round(usuario.peso * 35);
      setMeta(novaMeta);
    }
  }, [usuario]);

  const handleRegistro = () => {
    const hoje = new Date().toLocaleDateString();
    const novoRegistro = { data: hoje, quantidade: dose };
    const novoHistorico = [...historico, novoRegistro];
    setHistorico(novoHistorico);
    localStorage.setItem(`historico-${usuario.nome}`, JSON.stringify(novoHistorico));
  };

  const calcularConsumo = () => {
    const total = historico.reduce((sum, item) => sum + parseInt(item.quantidade), 0);
    const percentual = meta > 0 ? Math.round((total / meta) * 100) : 0;
    
    return {
      metaDia: `${meta}ml`,
      metaRestante: `${Math.max(0, meta - total)}ml`,
      metaConsumida: `${total}ml`,
      metaPercentual: `${percentual}%`,
    };
  };

  const dadosTabela = [
    { label: 'Meta do dia', value: calcularConsumo().metaDia },
    { label: 'Meta restante', value: calcularConsumo().metaRestante },
    { label: 'Meta já consumida', value: calcularConsumo().metaConsumida },
    { label: 'Meta já consumida (%)', value: calcularConsumo().metaPercentual },
  ];

  return (
    <div className="registro-container">
      <h1>Registro de Doses de Água</h1>
      <div className="registro-form">
        <RadioGroup
          name="dose"
          options={opcoesDose}
          selected={dose}
          onChange={setDose}
        />
        <Button onClick={handleRegistro}>Registrar</Button>
      </div>
      
      <Table data={dadosTabela} />
      
      <Button className="historico-button">Histórico</Button>
    </div>
  );
};

export default Registro;