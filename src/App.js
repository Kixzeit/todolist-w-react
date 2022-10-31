import React, { useState } from "react";
import TareaForm from "./components/TareaForm";
import "./App.css";
import Tarea from "./components/Tarea";
import logo from "./lista.png";
// import uuid from 'uuid/v4';

function App() {
  const [listaTareas, setListaTareas] = useState([]);

  const nuevaTarea = (tarea) => {
    setListaTareas([tarea, ...listaTareas]);
  };

  const borrar = (id) => {
    const listaFiltrada = listaTareas.filter((e, index) => index !== id);
    setListaTareas(listaFiltrada);
  };

  const actualizarTarea = (id, tarea) => {
    const listaActualizada = listaTareas.map((e, index) => {
      if (index === id) {
        e = tarea;
      }

      return e;
    });

    setListaTareas(listaActualizada);
  };
  return (
    <div className="App">
      <div className="divlogo">
        <img src={logo} alt="logo" className="logo"></img>
      </div>
      <div className=" body-app">
        <div className="horizontal">
          <div className="divformulario">
            <TareaForm nuevaTarea={nuevaTarea} />
          </div>
          <div className="lista divtareas">
            <h2>Lista de tareas</h2>
            {listaTareas.map((e, index) => (
              <Tarea
                key={index.toString()}
                value={index}
                tarea={e}
                borrar={borrar}
                id={index}
                editar={actualizarTarea}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
