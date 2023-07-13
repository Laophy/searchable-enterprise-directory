import express from 'express'
import cors from 'cors'
import * as Routes from './handleRoutes.js'

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

app.use(express.static('./public'))

console.log("Server starting on port: " + port);
app.listen(port);