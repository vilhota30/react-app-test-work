import { useSelector } from 'react-redux';
import {
  getUserImage,
  selectAuth,
  selectIsLoading,
  selectIsLoggedIn,
  getUser,
} from '../../redux/selectors';

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(getUser);
    const token = useSelector(selectAuth);
    const profilePic = useSelector(getUserImage);
    const isLoading = useSelector(selectIsLoading);
    return {
      isLoggedIn,
      user,
      token,
      profilePic,
      isLoading,
    };
};
