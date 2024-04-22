import React from 'react';
import { Button } from 'react-bootstrap';

const Tarea = ({ task, onComplete, onDelete }) => {//<--Se detallan los props recibidos desde Home.jsx (lo que retornará el componente)
    
    const {description, completed } = task;//<--Se extraen las propiedades de la tarea

    const handleComplete = () => {
        onComplete(task);//<--Se llama a la función onComplete pasando la tarea como argumento cuando se marca como completada a ListaTareas, detallándola como parametro del prop onComplete, que esta enviará a Home.jsx, y Home.jsx a TaskManager.jsx
    };

    const handleDelete = () => {
        onDelete(task);//<--Se llama a la función onDelete pasando la tarea a eliminar como argumento a ListaTareas, detallándola como parametro del prop onDelete, que esta enviará a Home.jsx, y Home.jsx a TaskManager.jsx
    };

    return (
        <div className='row p-2 align-items-center' style={{ backgroundColor: completed ? '#96f78f' : '' }/*Si la tarea está completada, tendrá un fondo verde y su texto tachará */}>
            <div className={`col ${completed ? 'text-decoration-line-through' : ''}`} style={{textAlign:"start"}}>{description}</div>
            <div className="col-auto"> 
                {completed ? (
                    <span>Completada</span>
                ) : (
                    <div>
                        <Button onClick={handleComplete/*<--Al clickear el boton de Completar, se ejecuta la función handleComplete */} variant="success" size="sm" className="me-2">✔</Button>
                        <Button onClick={handleDelete/*<--Al clickear el boton de Eliminar, se ejecuta la función handleDelete */} variant="danger" size="sm">✖</Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tarea;