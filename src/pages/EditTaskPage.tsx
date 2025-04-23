//EditTaskPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get the task ID from the URL
import { useTaskContext } from '../components/task/taskContext'; // Custom hook to manage tasks
import TaskForm from '../components/task/taskForm';

const EditTaskPage: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Get the task ID from the URL
    const { tasks, updateTask } = useTaskContext(); // Access tasks and updateTask from TaskContext

    // Find the task with the matching ID
    const taskToEdit = tasks.find((task) => task.id === id);

    return (
        <div>
            <TaskForm
                onSubmit={(task) => {
                    updateTask({ ...task, id}); // Always call updateTask with the correct ID
                }}
                initialValues={taskToEdit} // Pass the task to edit as initialValues
            />
        </div>
    );
};

export default EditTaskPage;