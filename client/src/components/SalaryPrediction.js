import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

export function SalaryPrediction() {
  const [jobRole, setJobRole] = React.useState('');
  const [workLocation, setWorkLocation] = React.useState('');
  const [predictedSalary, setPredictedSalary] = React.useState('0.00');

  async function sendPrediction() {
    setPredictedSalary('0')
    const res = await fetch('http://localhost:4000/api/predict/salary', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ jobRole, workLocation })
    })
    const data = await res.json()
    setPredictedSalary(data)
  }
  return (
    <Box sx={{ minWidth: 300, width: '100%' }}>
      <Box sx={{ width: '50%', display: 'flex-column', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
        <Paper elevation={6} sx={{ borderRadius: 5, p: 6 }}>
          <Typography variant="h4">
            Salary Prediction
          </Typography>
          <FormControl fullWidth sx={{ m: 1, mt: 3 }}>
            <InputLabel id="select-role-label">Job Role</InputLabel>
            <Select
              labelId="select-role-label"
              id="select-role"
              value={jobRole}
              label="Job Role"
              onChange={(e) => setJobRole(e.target.value)}
            >
              <MenuItem value={"Software Engineer"}>Software Engineer</MenuItem>
              <MenuItem value={"Data Engineer"}>Data Engineer</MenuItem>
              <MenuItem value={"Business Analyst"}>Business Analyst</MenuItem>
              <MenuItem value={"Web Developer"}>Web Developer</MenuItem>
              <MenuItem value={"Mechanical Engineer"}>Mechanical Engineer</MenuItem>
              <MenuItem value={"Systems Analyst"}>Systems Analyst</MenuItem>
              <MenuItem value={"IT Specialist"}>IT Specialist</MenuItem>
              <MenuItem value={"Data Architect"}>Data Architect</MenuItem>
              <MenuItem value={"HR"}>HR</MenuItem>
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
              <MenuItem value={"St.Paul"}>St.Paul</MenuItem>
              <MenuItem value={"Phoenix"}>Phoenix</MenuItem>
              <MenuItem value={"Denver"}>Denver</MenuItem>
              <MenuItem value={"Boston"}>Boston</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ m: 1, mt: 3 }}>
            <Button variant="outlined" onClick={() => sendPrediction()}>Submit</Button>
          </FormControl>
          <Typography variant="h6" style={{ marginTop: 15 }}>
            {predictedSalary === '0' ? <CircularProgress /> : ("Predicted Salary: $" + predictedSalary.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"))}
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}
