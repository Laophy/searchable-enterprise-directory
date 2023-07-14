import { PythonShell, useEffect } from 'react';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';


export function SalaryPrediction() {
    const [jobRole, setJobRole] = React.useState('');
    const [workLocation, setWorkLocation] = React.useState('');
    const [predictedSalary, setPredictedSalary] = React.useState('')

    function sendPrediction() {
        fetch('http://localhost:4000/api/predict/salary', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({jobRole})
        })
    }
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth sx={{ m: 1, mt: 3 }}>
                <InputLabel id="select-role-label">Job Role</InputLabel>
                <Select
                    labelId="select-role-label"
                    id="select-role"
                    value={jobRole}
                    label="Job Role"
                    onChange={(e) => setJobRole(e.target.value)}
                >
                    <MenuItem value={"Data Engineer"}>Data Engineer</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{ m: 1, mt: 3 }}>
                <InputLabel id="select-location-label">Work Location</InputLabel>
                <Select
                    labelId="select-location-label"
                    id="select-location"
                    value={workLocation}
                    label="Work Location"
                    onChange={(e) => setWorkLocation(e.target.value)}
                >
                    <MenuItem value={"Hartford"}>Hartford</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{ m: 1, mt: 3 }}>
                <button onClick = {()=>sendPrediction()}>Submit</button>
            </FormControl>
        </Box>
    );
}
