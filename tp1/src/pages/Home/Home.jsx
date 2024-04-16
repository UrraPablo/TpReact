// Home.jsx
import React from 'react';
import Input from '../../components/Input/Input';
import { useTasks } from '../../components/TaskManager/TaskManager';
import ListarTareas from '../../components/ListarTareas/ListarTareas';
import { Button } from 'react-bootstrap';

const Home = () => {
    const { tasks, filteredTasks, addTaskHandler, clearTasksHandler, handleComplete, handleDelete, handleInputChange } = useTasks();

    return (
        <div>
            <Input onAddTask={addTaskHandler} onInputChange={handleInputChange} />
            <ListarTareas tasks={filteredTasks} handleComplete={handleComplete} handleDelete={handleDelete} />
            <Button className="mt-3"onClick={clearTasksHandler}>Limpiar Tareas</Button>
        </div>
    );
};
export default Home;