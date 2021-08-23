const express = require("express")
const app = express()

dciCourseModules = [
    "HTML/CSS",
    "Javascript",
    "DOM",
    "SPA",
    "Backend",
    "Fullstack",
    "Final Project"
]

app.listen(5000, () => {
    console.log("The server has now started!")
})

app.get("/json", (request, response) => {
    response.json(dciCourseModules)
})