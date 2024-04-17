// Home.jsx
import React from 'react';
import Input from '../../components/Input/Input';
import { useTasks } from '../../components/TaskManager/TaskManager';
import ListarTareas from '../../components/ListarTareas/ListarTareas';
import { Button, Card} from 'react-bootstrap';
import Titulo from "../../components/Titulo/Titulo";

const Home = () => {
    const { tasks, filteredTasks, addTaskHandler, clearTasksHandler, handleComplete, handleDelete, handleInputChange } = useTasks();

    return (
        <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#f5f5f5'}}> {/* Flexbox para centrar vertical y horizontalmente */}
          <Card className="p-4 shadow" style={{ maxWidth: '400px', overflowY: 'auto' }}> {/* Agrega un desplazamiento vertical */}
            <Titulo texto="TaskList" /> {/* Usando el componente Titulo */}
            <div className="mt-3">
              <Input onAddTask={addTaskHandler} onInputChange={handleInputChange} />
              <div style={{ maxHeight: '300px', overflowY: 'auto', overflowX: 'hidden' }}> {/* Establece una altura máxima y agrega un desplazamiento vertical */}
                <ListarTareas tasks={filteredTasks} handleComplete={handleComplete} handleDelete={handleDelete} />
              </div>
            </div>
            <div className="d-flex justify-content-center mt-3"> {/* Flexbox para centrar horizontalmente */}
              <Button variant="secondary" style={{ width: '150px' }} onClick={clearTasksHandler}>Limpiar Tareas</Button>
            </div>
          </Card>
      </div>
    );
};
export default Home;