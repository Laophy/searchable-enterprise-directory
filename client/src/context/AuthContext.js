import React, { useState, createContext } from 'react';

const AuthContext = createContext([{}, () => {}]);

const AuthContextProvider = (props) => {
    const [authState, setAuthState] = useState({
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
    return (
        <AuthContext.Provider value={[authState, setAuthState]}>
            {props.children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthContextProvider };