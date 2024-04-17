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
        <div className="d-flex justify-content-center mb-3 align-items-center">
        <input type="text" className="form-control me-2" value={inputValue} onChange={handleChange} />
        <Button variant="success" size="sm" onClick={handleAddTask} style={{ height: 'calc(1.5em + 0.75rem + 2px)' }}>Nueva</Button>
    </div>
    );
};

export default Input;