import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListarAulasPage from './pages/ListarAulasPage';
import MarcarPresencaPage from './pages/MarcarPresencaPage';
import EditarPresencaPage from './pages/EditarPresencaPage';
import AdicionarAulaPage from './pages/AdicionarAulaPage';

function App() {
 
  return (
    <>
      <Router>
        <Routes>

          <Route path="/aulas" element={<ListarAulasPage />} />
          <Route path="/aulas/nova" element={<AdicionarAulaPage />} />
          <Route path="/presencas/marcar/:aulaId" element={<MarcarPresencaPage />} />
          <Route path="/presencas/editar/:aulaId" element={< EditarPresencaPage />}/>
        
        </Routes>
      </Router>
    </>
  );
}

export default App;
