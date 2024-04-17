// FilteredTasks.jsx
import React from 'react';
import Tarea from '../Tarea/Tarea';

const ListarTareas = ({ tasks, handleComplete, handleDelete }) => {
    return (
        <div>
            {tasks.map(task => (
                <Tarea key={task.id} task={task} onComplete={handleComplete} onDelete={handleDelete} />
            ))}
        </div>
    );
};

export default ListarTareas;