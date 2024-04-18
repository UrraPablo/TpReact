import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
const Input = ({ onAddTask, onInputChange }) => {//<--Se detallan los props recibidos desde Home.jsx (lo que retornará el componente)
    const [inputValue, setInputValue] = useState('');//<--El valor inicial del input (inputValue) sera ''

    const handleChange = (e) => {
        const value = e.target.value;//<--Se obtiene el valor actual del input
        setInputValue(value);//<--Cambia el valor de la variable inputValue por el valor actual del input
        onInputChange(value); //<--Retorna el valor del input al momento del cambio a handleInputChange de TaskManager (dicho funcionamiento está definido en el prop OnInputChange que se detalla en <Input> en Home.jsx)
    };

    const handleAddTask = () => {
        if (inputValue.trim() !== '') {//Si el valor del input no es vacío
            onAddTask(inputValue);//<--Retorna el valor del input al momento de clickear el botón de Nueva tarea a handleAddTask de TaskManager (dicho funcionamiento está definido en el prop addTask que se detalla en <Input> en Home.jsx)
            setInputValue('');//<--Luego de agregar una tarea el valor del input vuelve a ser ''
        }
    };

    return (
        <div className="d-flex justify-content-center mb-3 align-items-center">
        <input type="text" className="form-control me-2" value={inputValue /*<--El valor del input será el contenido de la variable inputValue*/} onChange={handleChange/*<--Cuando cambie el valor del input, se invoca la función handleChange */} />
        <Button variant="success" size="sm" onClick={handleAddTask/*<--Al clickear el botón, se invoca la función handleAddTask */} style={{ height: 'calc(1.5em + 0.75rem + 2px)' }}>Nueva</Button>
    </div>
    );
};

export default Input;