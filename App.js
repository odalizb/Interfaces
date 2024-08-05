import React from 'react';
import './App.css';
import ListaTareas from './componentes/ListaTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='tareas-lista-principal'>
        <h1>Lista de Tareas</h1>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
