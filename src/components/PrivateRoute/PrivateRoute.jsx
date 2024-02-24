import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import {selectAuth} from '../../redux/selectors';

const PrivateRoute = () => {
    const { isLoggedIn } = useSelector(selectAuth);
  
    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    }
  
    return <Outlet />;
  };
  
export default PrivateRoute;
