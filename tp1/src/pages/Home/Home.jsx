// Home.jsx
import React from 'react';
import Input from '../../components/Input/Input';
import { useTasks } from '../../components/TaskManager/TaskManager';
import ListarTareas from '../../components/ListarTareas/ListarTareas';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const { tasks, filteredTasks, addTaskHandler, clearTasksHandler, handleComplete, handleDelete, handleInputChange } = useTasks();

    return (
        <div>
            <Input onAddTask={addTaskHandler} onInputChange={handleInputChange} />
            <ListarTareas tasks={filteredTasks} handleComplete={handleComplete} handleDelete={handleDelete} />
            <button onClick={clearTasksHandler}>Limpiar Tareas</button>
        </div>
    );
};

export default Home;