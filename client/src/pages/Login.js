import Typography from '@mui/material/Typography';
import { AuthContext } from '../context/AuthContext';
import { useEffect, useState, useContext } from 'react';

import TextField from '@mui/material/TextField';

import useAuthContext from '../context/UseAuthContext'; // Login / Logout
import { Button } from '@mui/material';

export function Login() {
    const [authState, setAuthState] = useContext(AuthContext)
    const [loginFunctions, setloginFunctions] = useState(useAuthContext)
    const [userID, setUserID] = useState(0)

    const onLogin = () => {
        try {
            fetch(`http://localhost:4000/api/users/${+userID}`, {method: 'GET', mode: "cors", headers: {"Content-Type": "application/json"}})
                .then(res => res.json())
                .then((userData) => userData.emp_id ? loginFunctions.login(userData) : alert('User not found!'))
        } catch (err) {
            console.error(err)
        }
    }

    const onLogout = () => {
        loginFunctions.logout()
    }

    useEffect(() => {
        console.log(authState)
    }, [authState])


    return (
        <div style={{ textAlign: 'center', width: '100%', marginTop: '10vh' }}>
            {authState?.userIsLoggedin ?
                <>
                    <Typography variant="h3" noWrap component="div">
                        <Button onClick={() => onLogout()}>Logout {authState.full_name}</Button>
                    </Typography>
                </>
                :
                <div>
                    <Typography variant="h2" noWrap component="div">
                        Login
                    </Typography>
                    <TextField id="emp_id-input" label="Employee ID" variant="outlined" type='number' onChange={(e) => setUserID(e.target.value)} />
                    <Button onClick={() => onLogin()}>Login</Button>
                </div>
            }
        </div>
    )
}