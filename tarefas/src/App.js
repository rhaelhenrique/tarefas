import React, { useState } from 'react';

import NovaTarefa from './components/NovaTarefa';
import ListaTarefa from './components/ListaTarefa';

const App = () => {

  const [tarefas, setTarefas] = useState([]);

  const onNovaTarefa = (value) => {
    setTarefas([
      ...tarefas, //concatenador de arrays
      {
        id: new Date().getTime(),
        title: value,
        checked: false
      }])
  }

  const riscar = (tarefa) => {

    setTarefas(tarefas.map((obj) =>
      (obj.id === tarefa.id ? { ...obj, checked: !tarefa.checked } : obj) //usando a concatenação ...obj para aproveitar os primeiros campos do obj e alterando apenas o checked
      )
    );


    console.log('Riscando ', tarefas);
  }

  const remover = (tarefa) => {
    console.log('Está apagando o ', tarefa);

    setTarefas(tarefas.filter((obj) => obj.id !== tarefa.id));
  };

  return (
    <div id="app" className="container">
      <header>
        <h1 className="title">Tarefas</h1>
      </header>

      <div className="main">
        <NovaTarefa onNovaTarefa={onNovaTarefa}/>

        <ListaTarefa tarefas={tarefas} riscar={riscar} remover={remover}/>
      </div>

    </div>
  );
}

export default App;
