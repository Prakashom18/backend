const express =  require('express');
const app = express();

const userModel = require('./usermodel')

app.get('/',(req,res)=>{
    res.send("Database");
})

app.get('/create',async(req,res)=>{
    let createdUser= await userModel.create({
        name: "Harsh11",
        username:"harsh",
        email:"harsh@gmail.com"
       
    })
     res.send(createdUser);

})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})