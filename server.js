const express =require('express');
const app =express();
app.listen(process.env.PORT || 5000, ()=>console.log("server running..."));

const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));


app.get('/message',(req,res)=>{
    let users =JSON.parse (fs.readFileSync('message.json'));
    res.send(users)
    
})

let users = [];
app.post('/message',(req,res)=>{
    let name = req.body;
    users.push(name)
    fs.writeFileSync('message.json',JSON.stringify(users))
    res.send(users)
    
})
users = JSON.parse(fs.readFileSync('message.json'));

app.get('/user',(req,res)=>{
    let user = JSON.parse(fs.readFileSync('users.json'));
    res.send(user)
})


// app.get('/users',(req,res)=>res.send(users));