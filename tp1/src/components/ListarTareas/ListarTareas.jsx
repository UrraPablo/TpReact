import React from 'react';
import Tarea from '../Tarea/Tarea';

const ListarTareas = ({ tasks, handleComplete, handleDelete }) => {
    return (
        <div>
            {tasks.length > 0 ? (
                tasks.map(task => (
                    <Tarea key={task.id} task={task} onComplete={handleComplete} onDelete={handleDelete} />
                ))
            ) : (
                <span className="text-secondary">No hay nada por aquí...</span>
            )}
        </div>
    );
};

export default ListarTareas;