import * as React from 'react';
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Sidebar } from './components/Sidebar';

// Auth
import { AuthContext, AuthContextProvider } from './context/AuthContext';
import { useContext, useEffect } from 'react';

import { MissingPage } from './pages/MissingPage';
import { Overview } from './pages/account/Overview';
import { Dashboard } from './pages/account/Dashboard';
import { Job } from './pages/account/Job';
import { Contact } from './pages/account/Contact';
import { Compensation } from './pages/account/Compensation';
import { Pay } from './pages/account/Pay';

import { Login } from './pages/Login';
import { Directory } from './pages/users/Directory';
import { User } from './pages/users/User';

const newTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      dark: 'white',
      light: 'black',
      main: "#e01719"
    },
    secondary: {
      dark: 'white',
      light: 'black',
      main: "#f50057"
    }
  }
});

export default function App() {
  // Current user data
  const [authState, setAuthState] = useContext(AuthContext)

  useEffect(() => {
    setAuthState({
      userIsLoggedin: true,
      fName: 'Test first name',
      lName: 'Test last name',
      userName: 'TestUserName123'
    });
  }, [authState, setAuthState])

  return (
    <ThemeProvider theme={newTheme}>
      <Sidebar content={
        <AuthContextProvider value={[authState, setAuthState]}>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/home' element={<Dashboard />} />
            <Route path='*' element={<MissingPage />} />

            <Route path='/account/dashboard' element={<Dashboard />} />
            <Route path='/account/overview' element={<Overview />} />
            <Route path='/account/job' element={<Job />} />
            <Route path='/account/contact' element={<Contact self/>} />
            <Route path='/account/compensation' element={<Compensation />} />
            <Route path='/account/pay' element={<Pay />} />

            <Route path='/users/directory' element={<Directory />} />
            <Route path='/account/login' element={<Login />} />

            <Route path='/users/:id' element={<User />} />
          </Routes>
        </AuthContextProvider>

      } />
    </ThemeProvider>
  );
}