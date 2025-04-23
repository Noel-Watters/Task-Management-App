import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CallbackPage from './Auth0/CallbackPage';
import { useAuth0 } from '@auth0/auth0-react';
import AddTaskPage from './pages/AddTaskPage';
import EditTaskPage from './pages/EditTaskPage';
import AuthenticationGuard from './Auth0/AuthenticationGuard';
import LoginPage from './pages/LoginPage';


const App: React.FC = () => {

  const {isLoading} = useAuth0();
  
  if(isLoading) return (<div>Loading...</div>)

  return (
    <Routes>

      <Route path='/'element = {<LoginPage />} />

      <Route
      path="/home" 
      element={<AuthenticationGuard component ={HomePage} />} 
      />

      <Route 
      path="/task/" 
      element={<AuthenticationGuard component = {AddTaskPage} />} 
      />

      <Route 
      path="/task/:id" 
      element={<AuthenticationGuard component ={EditTaskPage} />} 
      />

      <Route path ="/callback" element={<CallbackPage />} />

    </Routes>
  );
};

export default App;