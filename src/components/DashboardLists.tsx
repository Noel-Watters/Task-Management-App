import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useTaskContext } from '../components/task/taskContext';


const DashboardLists: React.FC = () => {
    const { tasks, removeTask } = useTaskContext(); // Get tasks from the custom hook
    const navigate = useNavigate(); // Hook for navigation


    // Filter tasks by status
    const pendingTasks = tasks.filter((task) => !task.isCompleted);
    const completedTasks = tasks.filter((task) => task.isCompleted);

    return (
        <Container className="mt-5">
    <Row className="mt-4">
        <Col md={6}>
            <h2>Incomplete Tasks</h2>
        </Col>
        <Col md={6}>
            <h2>Completed Tasks</h2>
        </Col>
    </Row>

    <Row>
        <Col md={6}>
            <Row>
                {pendingTasks.map((task) => (
                    <Col key={task.id} className="mb-4">
                        <Card className="shadow-sm">
                            <Card.Body>
                                <Card.Title>{task.title}</Card.Title>
                                <Card.Text>
                                    {task.description || 'No description provided.'}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Due Date:</strong> {task.dueDate || 'No due date'}
                                </Card.Text>
                                <Button variant="primary" onClick={() => navigate(`/task/${task.id}`)}>
                                    Edit Task
                                </Button>
                                <Button variant="danger" className="ms-2" onClick={() => removeTask(task.id!)}>
                                    Delete Task
                                </Button>
                                
                                

                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Col>

        <Col md={6}>
            <Row>
                {completedTasks.map((task) => (
                    <Col key={task.id} className="mb-4">
                        <Card className="shadow-sm">
                            <Card.Body>
                                <Card.Title>{task.title}</Card.Title>
                                <Card.Text>
                                    {task.description || 'No description provided.'}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Due Date:</strong> {task.dueDate || 'No due date'}
                                </Card.Text>
                                <Button variant="primary" onClick={() => navigate(`/task/${task.id}`)}>
                                    Edit Task
                                </Button>
                                <Button variant="danger" className="ms-2" onClick={() => removeTask(task.id!)}>
                                    Delete Task
                                </Button>                                
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Col>
    </Row>
</Container>
    );
};

export default DashboardLists;