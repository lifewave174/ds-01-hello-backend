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

app.get("/text", (request, response) => {
    const stringFormat = dciCourseModules.join(" ")
    response.json(stringFormat)
})

app.get("/html", (request, response) => {
    let listFormat = dciCourseModules.map(module => `<li>${module}</li>`).join(" ")
    listFormat = `<b>Backend</b> <ul>${listFormat}</ul>`
    response.send(listFormat)
})