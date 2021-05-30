const express = require('express');
const app = express();
app.listen(process.env.PORT || 5000, () => console.log("server running..."));

const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));
let icons = [
    { id: 1, icon: '😓', sign: '):' },
    { id: 2, icon: '😄', sign: '(:' },
    { id: 3, icon: '😭', sign: 'cry' },
    { id: 4, icon: '🥰', sign: 'love' },
    { id: 5, icon: '😷', sign: 'sick' },
    { id: 6, icon: '😲', sign: 'wow' },
    { id: 7, icon: '😤', sign: 'bore' },
    { id: 8, icon: '🥱', sign: 'sleep' },
    { id: 9, icon: '😋', sign: 'haha' },
    { id: 10, icon: '🤬', sign: 'angry' },
]

app.get('/emoji', (req, res) => res.send(icons));

app.get('/message', (req, res) => {
    let users = JSON.parse(fs.readFileSync('message.json'));
    res.send(users)
})
let users = [];
app.post('/message', (req, res) => {
    let name = req.body;
    users.push(name)
    fs.writeFileSync('message.json', JSON.stringify(users))
    res.send(users)

})
users = JSON.parse(fs.readFileSync('message.json'));

app.get('/user', (req, res) => {
    let user = JSON.parse(fs.readFileSync('users.json'));
    res.send(user)
})


// app.get('/users',(req,res)=>res.send(icons));