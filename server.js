const express = require('express')
const app = express()
const port = 3003

app.get("/",(req,res)=>{
    console.log("Responding to root route")
    res.send("Hello from root")
})
app.get("/users",(req,res)=>{
    var user1 ={firstName:"Sthephen",lastName:"Curry"}
    res.json(user1)
    //res.send("Nodemon auto update ")
})

app.listen(port,()=>{
    console.log("Server is up and listening on "+port)
})