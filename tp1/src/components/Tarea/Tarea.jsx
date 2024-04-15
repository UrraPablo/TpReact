import React from 'react';

const Tarea = ({ task, onComplete, onDelete }) => {
    const { description, completed } = task;

    const handleComplete = () => {
        onComplete(task);
    };

    const handleDelete = () => {
        onDelete(task);
    };

    return (
        <div>
            <span>{description}</span>
            {completed ? (
                <span>Completada</span>
            ) : (
                <div>
                    <button onClick={handleComplete}>Completada</button>
                    <button onClick={handleDelete}>Eliminar</button>
                </div>
            )}
        </div>
    );
};

export default Tarea;