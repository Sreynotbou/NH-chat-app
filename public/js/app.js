
const url = "https://nh-chat-app.herokuapp.com/message";
// const url = "http://localhost:5000/message";

function resqustUser(respone) {
  let users = respone.data;
  const mess = document.querySelector('.message');
  if (mess !== null && users.length !== 0) {
    mess.remove();
  }
  let message = document.createElement('div');
  message.className = "message";
  let main = document.querySelector('.main');

  for (let user of users) {
    let li = document.createElement('li');
    let ul = document.createElement('ul');
    let newli = document.createElement('span');
    let name = document.createElement('span');
    let username = localStorage.getItem("username");


    name.textContent = user.name;
    li.textContent = user.message;
    newli.textContent = user.time;

    if (user.name == username) {
      li.style.background = "blue";
      newli.style.marginLeft = "50%";
      name.style.marginLeft = "25%";
      ul.appendChild(li);
      message.appendChild(ul)
      message.appendChild(newli);
      message.appendChild(name);
      main.appendChild(message);
    } else {
      ul.style.justifyContent = "flex-start";
      newli.style.marginLeft = "30%";
      name.style.marginLeft = "7%";
      ul.appendChild(li);
      message.appendChild(ul);
      message.appendChild(name);
      message.appendChild(newli);
      main.appendChild(message);
    }
  }
}

// emoji in chat app
let btnemoji = document.getElementById('emoji-btn');
const picker = new EmojiButton();
document.addEventListener('DOMContentLoaded', () => {
  picker.on('emoji', emoji => {
    document.querySelector('#text').value += emoji;
  });
  btnemoji.addEventListener('click', () => {
    picker.togglePicker(btnemoji);
  });
});


// funtion for user input and send
function send(event) {
  event.preventDefault();
  let user = localStorage.getItem("username")
  let color = localStorage.getItem("color")
  let today = new Date();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let newItem = {
    name: user,
    message: message.value,
    color: color,
    time: time,
  };

  if (message.value !== "") {
    axios
      .post(url, newItem)
      .then(loadData)
  }
  message.value = "";
}
const message = document.querySelector('.form-control');
// for access to server 
function loadData() {
  axios
    .get(url)
    .then(resqustUser)
}
loadData()
//  call functions send from input 
const btnSend = document.querySelector('.send');
btnSend.addEventListener('click', send);

// for protect user back
let haslogin = localStorage.length > 0;
if (haslogin) {
  setInterval(loadData, 1000)
} else {
  window.location.href = "../index.html";
}

// funtions user want signout 
function logout() {
  localStorage.clear();
  window.location.href = "../index.html";
}
const singout = document.querySelector("#singout");
singout.addEventListener('click', logout)

// store picture 
let data = localStorage.getItem('username');
let pic1 = "../images/pic1.jpeg";
let pic2 = "../images/pic2.png";
let picture = document.querySelector('#pic1');
let p = document.querySelector('p');
p.textContent = data;
if (data === "sreyhieb") {
  picture.src = pic1
} else {
  picture.src = pic2
}



