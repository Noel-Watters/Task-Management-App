import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { TaskProvider } from './components/task/taskContext.tsx'; // Import TaskProvider
import Auth0ProviderWithNavigate from './Auth0/Auth0Provider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TaskProvider>
      <BrowserRouter>
      <Auth0ProviderWithNavigate >
        <App />
       </Auth0ProviderWithNavigate>
      </BrowserRouter>
    </TaskProvider>
  </StrictMode>,
);