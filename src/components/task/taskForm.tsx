//taskForm.tsx
import { useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; // Use Bootstrap Card for better layout
import { Task } from './task'; // Import your Task interface

interface TaskFormProps {
    onSubmit: (task: Task) => void; // Function to handle submission
    initialValues?: Task;
}



const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, initialValues }) => {
    const { id } = useParams<{ id: string }>(); // Get the id from the URL params
    const navigate = useNavigate(); // Hook for navigation
    const isNewTask = !id; // Check if the task is new or existing

    const [formValues, setFormValues] = useState<Task>({
        title: 'New Task',
        description: '',
        dueDate: new Date().toISOString().split('T')[0], // Default to current date in YYYY-MM-DD format
        isCompleted: false, // Default to false
        ...initialValues, // Pre-fill the form with initial values if provided
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target as HTMLInputElement;
        const checked = (e.target as HTMLInputElement).checked;
        setFormValues((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formValues.title) {
            alert('Title is required');
            return;
        }

        if (!formValues.dueDate) {
            alert('Due date is required');
            return;
        }

        onSubmit(formValues); 
        navigate('/home');
    };

    return (
        <Container className="mt-5">
            <Button variant="secondary" onClick={() => navigate('/home')} className="mb-3">
                Back to Dashboard
            </Button>
            <Card className="shadow-sm">
                <Card.Header className="bg-primary text-white">
                    <h2 className="text-center">{isNewTask ? 'Create New Task' : 'Update Task'}</h2>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={formValues.title}
                                onChange={handleChange}
                                placeholder="Enter task title"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="description"
                                value={formValues.description || ''}
                                onChange={handleChange}
                                placeholder="Enter task description"
                                rows={3}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Due Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="dueDate"
                                value={formValues.dueDate || ''}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check
                                type="checkbox"
                                name="isCompleted"
                                label="Mark as Completed"
                                checked={formValues.isCompleted}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <div className="d-grid">
                            <Button variant="primary" type="submit" size="lg">
                                {isNewTask ? 'Create Task' : 'Update Task'}
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default TaskForm;