const express = require("express");
const cors = require("cors");
const { uuid } = require("uuidv4");
const app = express();

app.use(cors());
app.use(express.json());

const projects = [];

app.get("/projects", (req, res) => {
    const {title} = req.query;

    const results = title 
        ? projects.filter(project => project.title.includes(title))
        : projects

    return res.json(results);
});

app.post("/projects", (req, res) => {
    const {title, dev} = req.body;
    const project = {id: uuid(), title, dev}

    projects.push(project);

    return res.json(project);
});

app.put("/projects/:id", (req, res) => {
    const {id} = req.params;
    const {title, dev} = req.body;
    const projectIndex = projects.findIndex(project => project.id === id);

    if(projectIndex < 0){
        return res.status(400).json({error: "Projeto não encontrado"});
    }

    const project = {
        id, 
        title,
        dev
    }

    projects[projectIndex] = project;

    return res.json(project);
});

app.delete("/projects:id", (req, res) => {
    const {id} = req.params;
    const projectIndex = projects.findIndex(project => project.id === id);

    if(projectIndex < 0){
        return res.status(400).json({error: "Projeto não encontrado"});
    }

    projects.splice(projectIndex, 1);

    return res.status(204).send();
});

app.listen(3333, () => {
    console.log("Back-end started🚀");
});