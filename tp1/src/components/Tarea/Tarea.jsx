import React from 'react';
import { Button } from 'react-bootstrap';

const Tarea = ({ task, onComplete, onDelete }) => {
    const { description, completed } = task; // task: obj  description y completed: propiedades 

    const handleComplete = () => {
        onComplete(task); // a la funcion onComplete le pasa como argumento el obj task 
    };

    const handleDelete = () => {
        onDelete(task);
    };

    // Definir el color personalizado para la fila completada
    const customCompletedColor = '#96f78f'; // Cambia este color según tu preferencia

    // Clase CSS para el fondo personalizado cuando la tarea está completada
    const rowClass = completed ? 'bg-custom' : '';

    return (
        <div className={`row p-2 align-items-center ${rowClass}`} style={{ backgroundColor: completed ? customCompletedColor : '' }}>
            <div className={`col ${completed ? 'text-decoration-line-through' : ''}`} style={{textAlign:"start"}}>{description}</div>
            <div className="col-auto"> 
                {completed ? (
                    <span>Completada</span>
                ) : (
                    <div>
                        <Button onClick={handleComplete} variant="success" size="sm" className="me-2">✔</Button>
                        <Button onClick={handleDelete} variant="danger" size="sm">✖</Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tarea;