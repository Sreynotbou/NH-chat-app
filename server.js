const express =require('express');
const app =express();

app.listen(process.env.PORT || 5000, ()=>console.log("server running..."));


app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

let users=[
    { name:'sreynut' ,message:"Hi gye"},
    {name:'sreyhieb',message:"Hello world"},
]

app.get('/users',(req,res)=>{
    res.send(users);
})

app.post('/users',(req,res)=>{
    let user={
        username:req.body.name,
        message:req.body.message
    }
    users.push(user),
    res.send(users)
})