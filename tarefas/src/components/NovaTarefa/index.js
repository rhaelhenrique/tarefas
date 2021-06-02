import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const NovaTarefa = ({ onNovaTarefa }) => {

  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;

  const [value, setValue] = useState("");

  const onChange = (event) => { //a cada alteração na entrada de texto, o evento vai direcionando para o value
    setValue(event.target.value);
  }

  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY && value !== "") {
      submit();
    } else if (event.which === ESCAPE_KEY) {
      erase();
    }
  }

  const erase = () => { //quando for apertada a tecla ESC, essa função irá  limpar o campo.
    setValue('');
  }

  const submit = () => { //faz um console log com o value, para teste e limpar o campo.
    console.log('Está ok! Valor: ', value);

    if ( onNovaTarefa ){
      onNovaTarefa(value);
      erase();
    }

  }

  return (
    <input
      className="novaTarefa"
      placeholder="O que deve ser feito?"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
};

NovaTarefa.propTypes = {
  onNovaTarefa: PropTypes.func.isRequired,
};

export default NovaTarefa;
