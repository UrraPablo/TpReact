import React, { useState, useEffect } from "react";
import "./Contador.css";
import img from "../../images/trankilon.gif";

const Contador = ({ tasks }) => {
  const hayTareas = tasks.length > 0;
  const todasCompletadas = hayTareas && tasks.every((task) => task.completed);
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  useEffect(() => {
    if (todasCompletadas) {
      setMostrarMensaje(true);
      setTimeout(() => {
        setMostrarMensaje(false);
      }, 3000);
    }
  }, [todasCompletadas]);

  return (
    <div className="mt-2">
      {hayTareas && !todasCompletadas ? (
        <span className="text-success">
          Tareas completadas: {tasks.filter((task) => task.completed).length}
        </span>
      ) : todasCompletadas ? (
        <div>
          <div
            className={`fullscreen-message ${
              mostrarMensaje ? "fade-in" : "fade-out"
            }`}
          >
            <img src={img} alt="Animación" />
            <h3>¡Completaste todas las tareas!</h3>
          </div>
          {/* Hagan self-close siempre que se pueda --> /> */}
          {mostrarMensaje && <div className="overlay"></div>}
        </div>
      ) : null}
    </div>
  );
};

export default Contador;
