import React from 'react';
import './bootstrap.min.css';
import './index.css';
import Header from './components/Header';
import Formulario from './components/Formulario';

import CategoriasProvider from './context/CategoriasContext.js';
import RecetasProvider from './context/RecetasContext';
//A: importo el provider y lo dejo disponible para todos los componentes de App

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <Header/>

        <div className="container mt-5">
          <div className="row">
            <Formulario></Formulario>
          </div>
        </div>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
