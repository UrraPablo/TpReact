import React from 'react';
import { useTasks } from '../../components/TaskManager/TaskManager';//<--Importación del hook useTasks del componente TaskManager
import Input from '../../components/Input/Input';//<--Importación del componente Input
import ListarTareas from '../../components/ListarTareas/ListarTareas';//<--Importación del componente ListarTareas
import Contador from '../../components/Contador/Contador';//<--Importación del componente Contador
import { Button, Card } from 'react-bootstrap';//<--Importación del componentes de bootstrap
import Titulo from "../../components/Titulo/Titulo";//<--Importación del componente Titulo

const Home = () => {
  const { tasks, filteredTasks, addTaskHandler, clearTasksHandler, handleComplete, handleDelete, handleInputChange } = useTasks();
  //Se hace uso del hook useTasks, detallando las funciones del componente TaskManager, es decir, aquí se definen los "destinos" de los datos obtenidos de los componentes que se renderizan en Home.jsx (hijos)
  //tasks es el arreglo de tareas
  //filteredTasks es el arreglo de tareas filtradas (según el contenido del input)
  //clearTasksHandler es la función que elimina todas las tareas
  //handleComplete es la función que setea una tarea como completada
  //handleDelete es la función que elimina la tarea
  //handleInputChange es la función que se ejecuta cuando cambia el valor del input
  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#f5f5f5' }}>
      <Card className="p-4 shadow" style={{ maxWidth: '400px', overflowY: 'auto' }}>
        <Titulo texto="TaskList" />
        <div className="mt-3">
          <Input onAddTask={addTaskHandler} onInputChange={handleInputChange} />{/*<--Se le envían dos props al componente input:
              onAddTask={addTaskHandler}:Lo que se pase como parametro a AddTask desde el componente Input, será lo que se pase como parámetro a addTaskHandler en el componente TaskManager.jsx para agregar una nueva tarea
              onInputChange={handleInputChange}: Lo que se pase como parametro a onInputChange desde el componente Input, será lo que se pase como parámetro a handleInputChange en el componente TaskManager.jsx para filtrar las tareas por su descripcion según lo ingresado en el input*/}
          <div style={{ maxHeight: '300px', overflowY: 'auto', overflowX: 'hidden' }}>
            <ListarTareas tasks={filteredTasks} handleComplete={handleComplete} handleDelete={handleDelete} />{/*
                tasks={filteredTasks}:El prop "tasks" es enviado a ListarTareas para que renderice las tareas las tareas filtradas (filteredTasks) recibidas de TaskManager (el retorno de la funcion handleInputChange)
                handleComplete={handleComplete}: Este prop otorga la funcionalidad de la función handleComplete del hook UseTasks, importado de TaskManager, a ListarTareas, y ésta, se la pasará como prop a cada Tarea
                handleComplete={handleDelete}: Este prop otorga la funcionalidad de la función handleDelete del hook UseTasks, importado de TaskManager, a ListarTareas, y ésta, se la pasará como prop a cada Tarea
                 */}
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <Button variant="secondary" style={{ width: '150px' }} onClick={clearTasksHandler/*Al clickear el boton, el retorno del componente se enviará a la función clearTasksHandler, definida en TaskManager, importada como prop desde allí */}>Limpiar Tareas</Button>
        </div>
         <Contador tasks={tasks}/>
      </Card>
     
    </div>
  );
};
export default Home;