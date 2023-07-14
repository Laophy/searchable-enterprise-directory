import Typography from '@mui/material/Typography';
import { AuthContext } from '../context/AuthContext';
import { useState, useContext } from 'react';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import useAuthContext from '../context/UseAuthContext'; // Login / Logout
import { Button } from '@mui/material';

export function Login() {
    const [authState, setAuthState] = useContext(AuthContext)
    const [loginFunctions, setloginFunctions] = useState(useAuthContext)
    const [userID, setUserID] = useState(0)

    function onLogin() {
        try {
            fetch(`http://localhost:4000/api/users/${+userID}`, { method: 'GET', mode: "cors", headers: { "Content-Type": "application/json" } })
                .then(res => res.json())
                .then((userData) => userData.emp_id ? loginFunctions.login(userData) : alert('User not found!'))
        } catch (err) {
            console.error(err)
        }
    }

    function onLogout() {
        loginFunctions.logout()
    }

    // useEffect(() => {
    //     console.log(authState)
    // }, [authState])


    return (
        <div style={{ textAlign: 'center', width: '100%', marginTop: '10vh' }}>
            {authState?.userIsLoggedin ?
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ minWidth: 300, width: '40%', alignItems: 'center', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
                        <Paper elevation={6} sx={{ borderRadius: 5, p: 6 }}>
                            <Typography variant="h4">
                                Logout, {authState.full_name}
                            </Typography>
                            <Button variant='outlined' onClick={() => onLogout()} style={{ marginTop: 20 }}>Logout</Button>
                        </Paper>
                    </Box>
                </Box>
                :
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ minWidth: 300, width: '40%', marginLeft: 'auto', marginRight: 'auto' }}>
                        <Paper elevation={6} sx={{ borderRadius: 5, p: 6 }}>
                            <Typography variant="h4">
                                Login
                            </Typography>
                            <br /><TextField fullWidth id="emp_id-input" label="Employee ID" variant="outlined" type='number' onChange={(e) => setUserID(e.target.value)} />
                            <br /><TextField fullWidth id="emp_id-input-password" label="Password" variant="outlined" type='password' sx={{ mt: 2 }} />
                            <br /><Button fullWidth variant='outlined' style={{ marginTop: 20 }} onClick={() => onLogin()}>Login</Button>
                        </Paper>
                    </Box>
                </Box>
            }
        </div>
    )
}