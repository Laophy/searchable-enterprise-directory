import express from 'express'
import cors from 'cors'
import * as Routes from './handleRoutes.js'
import { Console } from 'console';
import {spawn} from 'child_process';
//const {spawn} = require('child_process');
const port = 4000;
const app = express();

app.use(express.json()); //Parse JSON body 
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:4000']
}))

app.get("/api/users/all", function (req, res) {
    Routes.getAllEmployees((emp) => {
        res.status(200).json(emp);
    })
});

app.get("/api/users/:id", function (req, res) {
    Routes.getEmployee(req.params.id, (emp) => {
        res.status(200).json(emp);
    })
});

app.post('/api/predict/salary',(req,res) => {
    const input = req.body
    const data = JSON.stringify(input)
    const pythonScript = spawn('python',['predict_salary.py']);
    //console.log(input)
    console.log('inside predict salary')

    //sending data to python
    pythonScript.stdin.write(data);
    pythonScript.stdin.end();
    
    let predictionNumber ='';
    //console.log('test')
    pythonScript.stdout.on('data',(data) => {
        console.log('inside standard out', data.toString())
        predictionNumber +=data.toString();
    });
    pythonScript.stderr.on('data',(data) => {
        console.log("There was a problem", data.toString())
    })
    
    //console.log('test')
    pythonScript.on('close',(code)=> {
        console.log(predictionNumber)
        if (code===0) {
            res.json(predictionNumber)
        }
        else {
            res.status(55).json({error: 'Prediction not successful'})
        }
    })

 });

app.use(express.static('./public'))



console.log("Server starting on port: " + port);
app.listen(port);