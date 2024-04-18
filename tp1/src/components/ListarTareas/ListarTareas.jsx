// FilteredTasks.jsx
import React from 'react';
import Tarea from '../Tarea/Tarea';

const ListarTareas = ({ tasks, handleComplete, handleDelete }) => {//<--Se detallan los props recibidos desde Home.jsx (lo que retornará el componente)
    return (
        <div>
            {tasks.map(task => (//Por cada elemento de tasks obtenido desde Home, y este a su vez desde TaskManager...
                <Tarea key={task.id} task={task} onComplete={handleComplete} onDelete={handleDelete} />/*Se renderiza una tarea.
                task={task} es un prop que envía al componente Tarea la tarea entera, para que pueda acceder a todos sus atributos.
                key={task.id} es un prop que envía a Tarea el id de esa tarea. Es importante pasar el id como key, por mas que se haya pasado la tarea entera porque React necesita identificar inequívocamente cada instancia del componente Tarea, "key" es una palabra reservada para pasar un prop con tal fin (para optimizar el renderizado).
                onComplete={handleComplete} es el prop que declara que  el valor con el que se llame a onComplete desde Tarea, será el parámetro para handleComplete, que ListarTareas.jsx retornará a Home.jsx, y Home.jsx a la función handleComplete en TaskManager.jsx.
                onDelete={handleDelete} es el prop que declara que el valor con el que se llame a onComplete desde Tarea, será el parámetro para handleComplete, que ListarTareas.jsx retornará a Home.jsx, y Home.jsx a la función handleComplete en TaskManager.jsx
                */
            ))}
        </div>
    );
};

export default ListarTareas;