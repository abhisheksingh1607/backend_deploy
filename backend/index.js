const express = require("express")
const app = express();

app.get("/", (req, res) => {
    res.status(200).send("landing page");
});

app.get("/about", (req, res) => {
res.status(200).send("About paage")
});

const port = 4000;
app.listen(port, () =>{
    console.log(`site is running port http://127.0.0.1:${port}`);
});