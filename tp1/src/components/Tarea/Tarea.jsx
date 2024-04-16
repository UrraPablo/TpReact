import React from 'react';
import { Button } from 'react-bootstrap';

const Tarea = ({ task, onComplete, onDelete }) => {
    const { description, completed } = task;

    const handleComplete = () => {
        onComplete(task);
    };

    const handleDelete = () => {
        onDelete(task);
    };

    return (

        <div className="d-flex row border p-1  justify-content-center">
            <div className="col col-sm-2">
                <span>{description}</span>
            </div>
            <div className="col col-sm-2">
                {completed ? (
                    <span>Completada</span>
                ) : (
                    <div className="d-flex row justify-content-center">
                        <div className="col col-sm-2">
                            <Button onClick={handleComplete} variant="success" size="sm">✔</Button>
                        </div>
                        <div className="col col-sm-2">
                            <Button onClick={handleDelete} variant="danger" size="sm">✖</Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tarea;