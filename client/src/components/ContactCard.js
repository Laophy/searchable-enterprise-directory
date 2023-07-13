import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import TravBg from '../images/trav_golf_2.jpg'

export function ContactCard({ user }) {
    const theme = useTheme();

    // Defualts
    if(!user) {
        user = {
            emp_id: 0,
            manager_id: 0,
            full_name: 'Test User',
            username: 'Test01',
            phone_number: '(999) 123-4567',
            job_role: 'Software Engineer',
            work_location: 'St.Paul',
            salary: '70000'
        }
    }

    return (
        <Paper elevation={6} sx={{ borderRadius: 5 }}>
            <Box
                sx={{
                    width: '100%',
                    height: '100%'
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: '350px',
                        borderRadius: 2,
                        marginBottom: 5,
                        backgroundImage: `url(${TravBg})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'
                    }}
                />
                <Box
                    sx={{
                        width: '100%',
                        padding: 1,
                        paddingLeft: 10,
                        marginBottom: 10,
                        display: 'inline-flex',
                        alignItems: 'flex-end',
                        justifyContent: 'flex-start'
                    }}
                >
                    <Avatar
                        alt={user?.full_name}
                        src={user?.full_name}
                        sx={{ width: 124, height: 124 }}
                    />
                    <Typography variant="h3" noWrap component="box" style={{ paddingLeft: 5 }}>
                        {user?.full_name}
                    </Typography>
                    <Paper elevation={6} sx={{ borderRadius: 5, margin: 1, padding: 1 }}>
                        <Typography variant="p" noWrap component="box" style={{ paddingLeft: 5 }}>
                            {user?.job_role}
                        </Typography>
                    </Paper>
                </Box>
                <Typography variant="h4" style={{ paddingLeft: 20, textAlign: 'left' }}>
                    Contact Information
                </Typography>
                <Box
                    sx={{
                        width: '100%',
                        padding: 1,
                        marginBottom: 2,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center'
                    }}
                >
                    <Paper elevation={6} sx={{ borderRadius: 5, margin: 1, padding: 1, width: '25%' }}>
                        <Typography variant="h6" noWrap component="box" style={{ paddingLeft: 5 }}>
                            Location
                        </Typography>
                        <br/>
                        <Typography variant="p" noWrap component="box" style={{ color: theme.palette.primary.main }}>
                            {user?.work_location}
                        </Typography>
                    </Paper>
                    <Paper elevation={6} sx={{ borderRadius: 5, margin: 1, padding: 1, width: '25%' }}>
                        <Typography variant="h6" noWrap component="box" style={{ paddingLeft: 5 }}>
                            Phone
                        </Typography>
                        <br/>
                        <Typography variant="p" noWrap component="box" style={{ color: theme.palette.primary.main }}>
                            {user?.phone_number}
                        </Typography>
                    </Paper>
                    <Paper elevation={6} sx={{ borderRadius: 5, margin: 1, padding: 1, width: '25%' }}>
                        <Typography variant="h6" noWrap component="box" style={{ paddingLeft: 5 }}>
                            Salary
                        </Typography>
                        <br/>
                        <Typography variant="p" noWrap component="box" style={{ color: theme.palette.secondary.main }}>
                            ${user?.salary}
                        </Typography>
                    </Paper>
                </Box>
            </Box>
        </Paper>
    )
}