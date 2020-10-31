const express = require("express");
const app = express();

app.use(express.json());

app.get("/projeto", (req, res) => {
    const {title, dev} = req.query;
    console.log(title);
    console.log(dev);

    return res.json([
        "Projeto 1",
        "Projeto 2"
    ]);
});

app.post("/projeto", (req, res) => {
    return res.json([
        "Projeto 1",
        "Projeto 2",
        "Projeto 3"
    ]);
});

app.put("/projeto/:id", (req, res) => {
    const {id} = req.params;
    console.log(id);

    return res.json([
        "Projeto 4",
        "Projeto 2",
        "Projeto 3"
    ]);
});

app.delete("/projeto:id", (req, res) => {
    const {id} = req.params;
    console.log(id);

    return res.json([
        "Projeto 2",
        "Projeto 3"
    ]);
});

app.listen(3333, () => {
    console.log("Back-end started🚀");
});