//First page you see welcoming you to the app and asking you to login
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginButton from '../Auth0/LoginButton'; 
import LogoutButton from '../Auth0/LogoutButton'; 


const LoginPage: React.FC = () => {


    return (

        <Container className="mt-5">
            <Row>
                <Col className="text-center">
                    <h1> Welcome to Task Manager</h1>
                    <h2>Please log in to continue</h2>
                    <div className= 'mt-4'>
                        <LoginButton />
                        <LogoutButton />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginPage;