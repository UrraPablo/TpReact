import React from 'react';
import Tarea from '../Tarea/Tarea';

const TaskList = ({ tasks, onComplete, onDelete }) => {
    return (
        <div>
            {tasks.map(task => (
                <Tarea key={task.id} task={task} onComplete={onComplete} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default TaskList;