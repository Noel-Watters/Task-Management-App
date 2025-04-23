//taskContext.tsx
import React, { createContext, useReducer, useContext, ReactNode,} from 'react';
import taskReducer from './taskReducer'; // Import your reducer
import { Task } from './task'; // Import your Task interface

//Define the shape of the Context
interface TaskContextType {
    tasks: Task[];
    addTask: (task: Task) => void;
    updateTask: (task: Task) => void;
    removeTask: (taskId: string) => void;
}

// Create the context
const TaskContext = createContext<TaskContextType | undefined>(undefined);

//TaskProvider component
export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [tasks, dispatch] = useReducer(taskReducer, [], () => {
        const storedTasks = localStorage.getItem('tasks');
        return storedTasks ? JSON.parse(storedTasks) : [];
    });

// Action functions
const addTask = (task: Task) => dispatch({ type: 'ADD_TASK', payload: task });
const updateTask = (task: Task) => dispatch({ type: 'UPDATE_TASK', payload: task });
const removeTask = (taskId: string) => dispatch({ type: 'REMOVE_TASK', payload: taskId });

return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, removeTask }}>
        {children}
    </TaskContext.Provider>
);
};

// Custom hook to use the TaskContext
export const useTaskContext = (): TaskContextType => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTaskContext must be used within a TaskProvider');
    }
    return context;
};