const express = require("express")
const app = express()

app.get("/", (req, res) => {
    return res.json("JSONPlaceholder")
})

app.listen(3000, () => {
    console.log("Server running");
})

