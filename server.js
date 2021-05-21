const express =require('express');
const app =express();

app.listen(process.env.PORT || 5000, ()=>console.log("server running..."));


app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

let users=[
    {id:1, name:'unknow' ,message:"test"},
    {id:2, name:'sreyhieb',message:"Hello world"},
]

app.get('/users',(req,res)=>{
    res.send(users);
});

app.post('/users',(req,res)=>{
    let newUsers =req.body;
    users.push(newUsers);
    res.send(newUsers);
})

