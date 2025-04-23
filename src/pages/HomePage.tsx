import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import DashboardLists from '../components/DashboardLists';
import LogoutButton from '../Auth0/LogoutButton';

const HomePage: React.FC = () => {
    const navigate = useNavigate(); // Hook for navigation

    return (
        <Container className="mt-5">

            <Row>
                <Col md={8}>
                    <h1 className="text-center">Task Dashboard</h1>
                </Col>
                <Col md={2} >
                    <Button variant="primary" onClick={() => navigate('/task/')} className="float-end">
                        Create New Task
                    </Button>
                </Col>
                <Col md={2} >
                    <LogoutButton />
                </Col>
            </Row>

            <DashboardLists />

        </Container>
    );
};

export default HomePage;

//Move Creation task to new page and add a button to create task 
//update to display tasks as cards with bootstrap
//Context API for Global State Management:
//Implement the Context API in React with TypeScript for managing global application state and sharing data between components.
//Authentication and Authorization with Auth0:
//Integrate Auth0 authentication services into the application for secure user authentication and authorization.
//Configure TypeScript types for Auth0 user data.
//Double Check error handling and validation in the task form to ensure robust user input handling and feedback.
  