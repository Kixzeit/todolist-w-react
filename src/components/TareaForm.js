import React, { useState } from "react";
import "../App.css";

const EscribirTarea = (props) => {
  const [inputText, setInputText] = useState("");
  const [validacion, setValidacion] = useState(true);

  const manejarFormulario = (event) => {
    setInputText(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    if (inputText.trim() !== "") {
      props.nuevaTarea(inputText);
      setInputText("");
      setValidacion(true);
    } else {
      setValidacion(false);
    }
  };
  return (
    <div>
      <form className="form" onSubmit={submit}>
        <h1>Añadir tarea</h1>
        <input
          value={inputText}
          onChange={manejarFormulario}
        />
        <button >Guardar</button>
      </form>
      {!validacion && (
        <div className="validartarea">Añada una tarea</div>
      )}
    </div>
  );
};

export default EscribirTarea;
