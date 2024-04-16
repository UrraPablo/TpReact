import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
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
        <div className='div d-flex justify-content-center'>
            <input type="text" value={inputValue} onChange={handleChange} />
            <Button variant="success" size="sm"onClick={handleAddTask}>+</Button>
        </div>
    );
};

export default Input;