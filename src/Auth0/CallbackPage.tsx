import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const CallbackPage: React.FC = () => {
    const { isLoading, error, isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/home"); // Redirect to the dashboard or homepage
        }
    }, [isAuthenticated, navigate]);

    if (isLoading) {
        return <div>Loading... Please wait while we log you in.</div>;
    }

    if (error) {
        return <div>Oops... {error.message}</div>;
    }

    return (
        <div>
            <h1>Authentication Successful</h1>
            <p>You are being redirected...</p>
        </div>
    );
};

export default CallbackPage;