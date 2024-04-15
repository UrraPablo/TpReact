import { useState, useEffect } from 'react';
import { addTask, getAllTasks, clearTasks, updateTaskCompletion, deleteTask } from '../../util/fileUtils';

export const useTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        try {
            const tasksFromDB = await getAllTasks();
            setTasks(tasksFromDB);
            setFilteredTasks(tasksFromDB);
        } catch (error) {
            console.error(error);
        }
    };

    const addTaskHandler = async (description) => {
        try {
            const newTask = { description, completed: false };
            await addTask(newTask);
            await loadTasks();
        } catch (error) {
            console.error(error);
        }
    };

    const clearTasksHandler = async () => {
        try {
            await clearTasks();
            setTasks([]);
            setFilteredTasks([]);
        } catch (error) {
            console.error(error);
        }
    };

    const handleComplete = async (task) => {
        try {
            await updateTaskCompletion(task.id, true);
            const updatedTasks = tasks.map(t => (t.id === task.id ? { ...t, completed: true } : t));
            setTasks(updatedTasks);
            setFilteredTasks(updatedTasks);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (task) => {
        try {
            await deleteTask(task.id);
            const updatedTasks = tasks.filter(t => t.id !== task.id);
            setTasks(updatedTasks);
            setFilteredTasks(updatedTasks);
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (value) => {
        const filtered = tasks.filter(task => task.description.toLowerCase().includes(value.toLowerCase()));
        setFilteredTasks(filtered);
    };

    return { tasks, filteredTasks, addTaskHandler, clearTasksHandler, handleComplete, handleDelete, handleInputChange };
};