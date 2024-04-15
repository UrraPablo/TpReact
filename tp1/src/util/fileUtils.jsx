// fileUtils.js
export const openDB = () => {
    return new Promise((resolve, reject) => {
        const request = window.indexedDB.open('tasksDB', 1);

        request.onerror = () => {
            reject('Error al abrir la base de datos');
        };

        request.onsuccess = () => {
            resolve(request.result);
        };

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            db.createObjectStore('tasks', { keyPath: 'id', autoIncrement: true });
        };
    });
};

export const addTask = (task) => {
    return new Promise(async (resolve, reject) => {
        try {
            const db = await openDB();
            const transaction = db.transaction(['tasks'], 'readwrite');
            const objectStore = transaction.objectStore('tasks');
            const request = objectStore.add(task);
            request.onsuccess = () => {
                resolve();
            };
        } catch (error) {
            reject('Error al agregar la tarea');
        }
    });
};

export const getAllTasks = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const db = await openDB();
            const transaction = db.transaction(['tasks'], 'readonly');
            const objectStore = transaction.objectStore('tasks');
            const request = objectStore.getAll();
            request.onsuccess = () => {
                resolve(request.result);
            };
        } catch (error) {
            reject('Error al obtener las tareas');
        }
    });
};

export const clearTasks = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const db = await openDB();
            const transaction = db.transaction(['tasks'], 'readwrite');
            const objectStore = transaction.objectStore('tasks');
            const request = objectStore.clear();
            request.onsuccess = () => {
                resolve();
            };
        } catch (error) {
            reject('Error al limpiar las tareas');
        }
    });
};

export const updateTaskCompletion = (taskId, completed) => {
    return new Promise(async (resolve, reject) => {
        try {
            const db = await openDB();
            const transaction = db.transaction(['tasks'], 'readwrite');
            const objectStore = transaction.objectStore('tasks');
            const request = objectStore.get(taskId);
            
            request.onsuccess = () => {
                const task = request.result;
                if (task) {
                    task.completed = completed;
                    const updateRequest = objectStore.put(task);
                    updateRequest.onsuccess = () => {
                        resolve();
                    };
                } else {
                    reject('La tarea no fue encontrada');
                }
            };

            request.onerror = () => {
                reject('Error al obtener la tarea');
            };
        } catch (error) {
            reject('Error al actualizar la tarea');
        }
    });
};

export const deleteTask = (taskId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const db = await openDB();
            const transaction = db.transaction(['tasks'], 'readwrite');
            const objectStore = transaction.objectStore('tasks');
            const request = objectStore.delete(taskId);

            request.onsuccess = () => {
                resolve();
            };

            request.onerror = () => {
                reject('Error al eliminar la tarea');
            };
        } catch (error) {
            reject('Error al eliminar la tarea');
        }
    });
};