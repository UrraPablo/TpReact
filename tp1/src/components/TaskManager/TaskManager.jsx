import { useState, useEffect } from "react";
import {
  addTask,
  getAllTasks,
  clearTasks,
  updateTaskCompletion,
  deleteTask,
} from "../../util/fileUtils"; //<--Importa las funciones de la BD

//Llamen de la misma manera a los files como a sus exports principales. En este caso el file deberia llamarse useTaskManager.
export const useTasks = () => {
  //Define el prop useTasks
  const [tasks, setTasks] = useState([]); //Inicializa el arreglo de tareas como vacío
  const [filteredTasks, setFilteredTasks] = useState([]); //Inicializa el arreglo de tareas filtradas como vacío

  useEffect(() => {
    loadTasks(); //Cuando se hace uso del componente por primera vez, carga las tareas
  }, []);

  const loadTasks = async () => {
    //Esta función obtiene todas las tareas de la base de datos utilizando la función getAllTasks y actualiza los estados tasks y filteredTasks con las tareas obtenidas.
    try {
      const tasksFromDB = await getAllTasks();
      setTasks(tasksFromDB);
      setFilteredTasks(tasksFromDB);
    } catch (error) {
      console.error(error);
    }
  };

  const addTaskHandler = async (description) => {
    //Carga una nueva tarea, con la descripción obtenida desde el Input, y "completed" en 0 (completada en false)
    try {
      const newTask = { description, completed: false };
      await addTask(newTask); //Agrega la tarea
      await loadTasks(); //Carga las tareas luego de la adición
    } catch (error) {
      console.error(error);
    }
  };

  const clearTasksHandler = async () => {
    //Elimina todas las tareas
    try {
      await clearTasks(); //Llama a la función clearTasks de la BD
      setTasks([]); //Setea las tareas y las tareas filtradas en vacío
      setFilteredTasks([]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleComplete = async (task) => {
    //Cuando se clickea el boton de completar en Tarea, recibe la tarea a completar...
    try {
      await updateTaskCompletion(task.id, true); //Llama a la función de la BD que actualiza el estado de las tareas pasando como parametro el id de la tarea y el valor de completed (true)
      const updatedTasks = tasks.map((t) =>
        t.id === task.id ? { ...t, completed: true } : t
      ); //Obtiene las tareas completadas
      setTasks(updatedTasks); //Setea las tareas con las tareas completadas
      setFilteredTasks(updatedTasks); //Al igual que las tareas filtradas
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (task) => {
    //Cuando se clickea el boton de eliminar en Tarea, recibe la tarea a eliminar...
    try {
      await deleteTask(task.id); //Llama a la funcion eliminar tarea de la BD pasando como parametro el id
      const updatedTasks = tasks.filter((t) => t.id !== task.id); //Elimina la tarea con ese id del actual arreglo de tareas
      setTasks(updatedTasks); //Actualiza el arreglo
      setFilteredTasks(updatedTasks);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (value) => {
    //Cuando recibe el valor del input desde Input
    const filtered = tasks.filter((task) =>
      task.description.toLowerCase().includes(value.toLowerCase())
    ); //Filtra las tareas
    setFilteredTasks(filtered); //Retorna las tareas filtradas
  };

  return {
    tasks,
    filteredTasks,
    addTaskHandler,
    clearTasksHandler,
    handleComplete,
    handleDelete,
    handleInputChange,
  }; //Retorna las variables y funciones a Home.jsx, quien las distribuirá a los distintos componentes
};
