import React, { useState } from 'react';
const Input = ({ onAddTask, onInputChange }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        onInputChange(value); // Llamar a onInputChange con el nuevo valor del input
    };

    const handleAddTask = () => {
        if (inputValue.trim() !== '') {
            onAddTask(inputValue);
            setInputValue('');
        }
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button onClick={handleAddTask}>Agregar Tarea</button>
        </div>
    );
};

export default Input;