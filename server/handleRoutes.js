import { MongoClient } from 'mongodb'

const url = "mongodb://localhost:27017";
const dbName = "enterprise_directory";
const collectionName = "employees"
let collection;
let db;

async function startup() {
    let client = new MongoClient(url);
    await client.connect();
    db = client.db(dbName)
    collection = db.collection(collectionName);
}
startup();

// Get all employees
export function getAllEmployees(callback) {
    let dataPromise = collection.find({}).toArray();
    dataPromise.then((emp) => callback(emp));
};

// Get one employees
export function getEmployee(emp_id, callback) {
    const user = collection.find({}).toArray();
    user.then((user) => callback(user.find(u => u.emp_id === +emp_id) || [{}]));
}