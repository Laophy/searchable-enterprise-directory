import { useContext } from 'react';
import { AuthContext } from './AuthContext';

const useAuthContext = () => {
    const [authState, setAuthState] = useContext(AuthContext);

    const login = (loginDetails) => {
        setAuthState({
            userIsLoggedin: true,
            emp_id: loginDetails.emp_id,
            manager_id: loginDetails.manager_id,
            full_name: loginDetails.full_name,
            username: loginDetails.username,
            phone_number: loginDetails.phone_number,
            job_role: loginDetails.job_role,
            work_location: loginDetails.work_location,
            salary: loginDetails.salary
        });
    };

    const logout = () => {
        setAuthState({
            userIsLoggedin: false,
            emp_id: 0,
            manager_id: 0,
            full_name: '',
            username: '',
            phone_number: '',
            job_role: '',
            work_location: '',
            salary: ''
        });
    };

    return { login, logout };
};

export default useAuthContext;