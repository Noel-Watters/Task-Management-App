// Task Details page - details of a single task
// Display task info allowing users to modify task
import React from 'react';
import { useTaskContext } from '../components/task/taskContext'; // Custom hook to manage tasks
import TaskForm from '../components/task/taskForm';

const AddTaskPage: React.FC = () => {
    const { addTask } = useTaskContext(); // Access addTask from TaskContext

    return (
        <div>
            <TaskForm
                onSubmit={(formValues) => {
                    addTask({ ...formValues, id: Date.now().toString() }); // Add task with a unique ID
                }}
            />
        </div>
    );
};

export default AddTaskPage;