const { urlencoded } = require("express");
const express = require("express");
const app = express();
app.use(express.json())
app.use(urlencoded({extended:true}))

app.get("/", (req, res) => {
    res.send('provide /login URL')
})
app.get("/home", (req, res) => {
    console.log('this is home pge');
    res.send('this is home i guess')


})

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post("/goto", (req, res) => {
    let output = req.body;
    let user = "unknown";
    let pass = "12345678";
    if(user == output.username && pass == output.password) {
        res.sendFile(__dirname + "/index.html");
    } else {
        res.send("incorrect credentials");
    }
})

app.listen(5005, () => {
    console.log("server is live");
})