// create an express app
const express = require("express")
const path = require('path')

const app = express()

// use the express-static middleware
app.use(express.static("public"))
app.use('/css', express.static(__dirname+'/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname+'/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname+'/node_modules/tether/dist/js'));
app.use('/js', express.static(__dirname+'/node_modules/jquery/dist'));

// define the first route
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname,'/index.html'))
})

app.get("/index.html", function (req, res) {
    res.sendFile(path.join(__dirname,'/index.html'))
})

// console.log(__dirname)
// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));