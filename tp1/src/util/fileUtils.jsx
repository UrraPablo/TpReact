// Abre una conexión con la base de datos IndexedDB llamada 'tasksDB' con la versión 1.
// Si la base de datos no existe, la crea.
export const openDB = () => {
    return new Promise((resolve, reject) => {
        const request = window.indexedDB.open('tasksDB', 1);

        // Se ejecuta si hay un error al abrir la base de datos.
        request.onerror = () => {
            reject('Error al abrir la base de datos');
        };

        // Se ejecuta cuando la base de datos se abre con éxito.
        request.onsuccess = () => {
            resolve(request.result);
        };

        // Se ejecuta cuando la base de datos necesita actualizarse.
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            // Crea un almacén de objetos llamado 'tasks' con un campo 'id' como clave principal.
            db.createObjectStore('tasks', { keyPath: 'id', autoIncrement: true });
        };
    });
};

// Agrega una tarea a la base de datos.
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

// Obtiene todas las tareas de la base de datos.
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

// Elimina todas las tareas de la base de datos.
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

// Actualiza el estado de completitud de una tarea en la base de datos.
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

// Elimina una tarea de la base de datos por su ID.
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