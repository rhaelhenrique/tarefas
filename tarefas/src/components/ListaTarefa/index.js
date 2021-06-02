import React from 'react';
import { MdDelete } from 'react-icons/md';
import PropTypes from 'prop-types';

import './styles.css';

// A função LsitaTarefa recebe tarefas, riscar e remover, que estão no App
const ListaTarefa = ({ tarefas, riscar, remover }) => {

  return (
    <ul className="listaTarefas">
      {
        tarefas.map((tarefa) => (
          <li key={tarefa.id.toString}>
            <span
              onClick={() => riscar(tarefa)} //chamando a função de riscar a partir do click
              role="button" //regra do click como um botão
              onKeyPress={() => riscar(tarefa)} //necessário colcoar essa prop também para que funcione o click
              className={["itenTarefa", tarefa.checked ? "checked" : ""].join(" ")}>
              {tarefa.title}
            </span>
            <button
              className="remove"
              type="button"
              onClick={() => remover(tarefa)}
            >
                <MdDelete size={28} />
            </button>
          </li>
        ))
      }
    </ul>
  )
};

//Validacao do componente
ListaTarefa.propTypes = {
  tarefas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  riscar: PropTypes.func.isRequired,
  remover: PropTypes.func.isRequired,
};

export default ListaTarefa;
