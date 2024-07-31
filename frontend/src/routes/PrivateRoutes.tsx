import { Outlet, Navigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';

const PrivateRoute: React.FC = () => {
  const {user, loading} = useContext(AuthContext)

  if (loading) {
    return <></>;
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute
