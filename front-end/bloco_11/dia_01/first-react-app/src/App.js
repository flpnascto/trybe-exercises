import React from 'react';
import './App.css';
import task from './task';

const listAppointments = [
  'Fundamentos de Desenvolvimento Web (concluído)',
  'Desenvolvimento Front-end',
  'Desenvolvimento Back-end',
  'Ciência da Computação',
  'Desenvolvimento WEB Completo',
  'Trabalhar como desenvolvedor web e aplicações'
]
function App() {
  return (
    <div>
      { listAppointments.map(item => task(item)) }
    </div>
  );
}

export default App;
