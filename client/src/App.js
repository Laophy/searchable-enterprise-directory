import * as React from 'react';
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Sidebar } from './components/Sidebar';

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
  return (
    <ThemeProvider theme={newTheme}>
      <Sidebar content={
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/home' element={<Dashboard />} />
            <Route path='*' element={<MissingPage />} />

            <Route path='/account/dashboard' element={<Dashboard />} />
            <Route path='/account/overview' element={<Overview />} />
            <Route path='/account/job' element={<Job />} />
            <Route path='/account/contact' element={<Contact />} />
            <Route path='/account/compensation' element={<Compensation />} />
            <Route path='/account/pay' element={<Pay />} />

            <Route path='/users/directory' element={<Directory />} />
            <Route path='/account/login' element={<Login />} />
            <Route path='/account/logout' element={<h1>Logout Page</h1>} />

            <Route path='/users/:id' element={<User />} />
          </Routes>
      } />
    </ThemeProvider>
  );
}