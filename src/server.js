//declarei
const express = require('express')
//instanciei
const server = express()

//usage another files, css. img....
server.use(express.static('src'))
server.get("/", (req, res)=> {
  return res.sendFile(__dirname + "/index.html")
})
.listen(3000)