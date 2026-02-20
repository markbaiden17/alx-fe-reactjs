import { Navigate } from 'react-router-dom';

// Simple mock authentication hook
const useAuth = () => {
  // Change to true to test the "logged in" state
  const isAuthenticated = false; 
  return { isAuthenticated };
};

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;