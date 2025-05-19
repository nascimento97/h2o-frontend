import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Cadastro from './pages/cadastro';
import Login from './pages/login';
import Registro from './pages/registro';
import Historico from './pages/historico';
import './styles/global.css';

const App = () => {
  const [usuario, setUsuario] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route
          path="/login"
          element={<Login onLogin={(user) => setUsuario(user)} />}
        />
        <Route
          path="/registro"
          element={usuario ? <Registro usuario={usuario} /> : <Navigate to="/login" />}
        />
        <Route
          path="/historico"
          element={usuario ? <Historico usuario={usuario} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;