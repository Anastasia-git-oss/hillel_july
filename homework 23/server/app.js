
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
app.use(express.json());




const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientPath = path.join(__dirname, '..', 'client');
app.use(express.static(clientPath));

let tasks = [];
const port = 3000;

app.get('/tasks', (request, response) => {
  response.send(tasks);
});


app.post('/tasks', (req, res) => {
    const { title, description, status } = req.body;
    const newTask = {
        id: tasks.length + 1,
        title,
        description,
        status,
    };
    tasks.push(newTask);
    res.send(newTask);
});



app.patch('/tasks/:id', (req, res) => {
   const {id } = req.params;
   const taskIndex = tasks.findIndex(task => task.id === parseInt(id));
   if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
   }
 

})

app.delete('/tasks/:id', (req, res) => {
    const {id } = req.params;
    const task = tasks.findIndex(task => task.id === parseInt(id));
    if (task === -1) {
        return res.status(404);
    }
    tasks.splice(task, 1);
    res.status(200).send();
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});