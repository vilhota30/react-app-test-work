import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import {selectAuth} from '../../redux/selectors';

const PublicRoute = () => {
    const { isLoggedIn } = useSelector(selectAuth);
  
    if (isLoggedIn) {
      return <Navigate to="/user" />;
    }
  
    return <Outlet />;
  };
  
  export default PublicRoute;