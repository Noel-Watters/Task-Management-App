//taskReducer.ts
import { Task } from "./task";


type TaskAction =
    | { type: 'ADD_TASK'; payload: Task }
    | { type: 'UPDATE_TASK'; payload: Task }
    | { type: 'REMOVE_TASK'; payload: string };

    const taskReducer = (state: Task[], action: TaskAction): Task[] => {
        switch (action.type) {
            case 'ADD_TASK':
                return [...state, action.payload];
            case 'UPDATE_TASK':
                return state.map((task) =>
                    task.id === action.payload.id ? action.payload : task
                );
            case 'REMOVE_TASK':
                return state.filter((task) => task.id !== action.payload);
            default:
                return state;
        }
    };

export default taskReducer;