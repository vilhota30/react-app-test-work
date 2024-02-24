import { RegistrationPageWrapper, RegistrationFormWrapper } from "./Register.styled";
import UserRegisterForm from "components/Register/Register";
import { selectIsLoading } from "../../redux/selectors";
import VortexLoader from "components/VortexLoader/VortexLoader";
import {useSelector} from 'react-redux';

const RegisterPage = () => {
    const isLoading = useSelector(selectIsLoading);
      return (
        <RegistrationPageWrapper>
          <RegistrationFormWrapper>
                 { isLoading && <VortexLoader /> }
                  <UserRegisterForm />
          </RegistrationFormWrapper>
        </RegistrationPageWrapper>
      );
    };
    
export default RegisterPage;
