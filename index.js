const express = require("express")

const app = express()
app.get("/api/main",(req,res) => {
    res.send("Express.js is a small framework that works on top of Node.js web server functionality to simplify its APIs and add helpful new features.It makes it easier to organize your application’s functionality with middleware and routing. It adds helpful utilities to Node.js HTTP objects and facilitates the rendering of dynamic HTTP objects.")
})

app.listen(5050, () => {
    try{
        console.log("server is running on port 3000");
    }
    catch(err){
        console.log(err,"error");
    }
})