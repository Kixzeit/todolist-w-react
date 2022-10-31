import React, { useState } from "react";
import "../App.css";
import { FiX } from "react-icons/fi";

const Tarea = (props) => {
  const [modoEdit, setModoEdit] = useState(false);

  const [editText, setEditText] = useState("");

  const editar = () => {
    setModoEdit(true);
  };

  const manejarEdit = (event) => {
    setEditText(event.target.value);
  };

  const submitEdit = (event) => {
    event.preventDefault();
    props.editar(props.id, editText);
    setEditText("");
    setModoEdit(false);
  };

  const borrarTarea = () => {
    props.borrar(props.id);
  };
  return (
    <div className="todaslastareas">
      {!modoEdit ? (
        <div className="tarea">
          <span>{props.tarea}</span>
          <button className="edit" onClick={editar}>
            EDIT
          </button>
          <button lassName="borrar" onClick={borrarTarea}>
            < FiX />
          </button>
        </div>
      ) : (
        <form className="formEdit" onSubmit={submitEdit}>
          <input
            className="input"
            placeholder="Edite su tarea"
            value={editText}
            onChange={manejarEdit}
          />
          <button className="guardar">Guardar</button>
        </form>
      )}
    </div>
  );
};

export default Tarea;
