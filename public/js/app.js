
function resqustUser(respone) {
  let users = respone.data;
  console.log(users)
  let list = document.querySelector('ul');
  if (list !== null) list.remove();
  const main = document.querySelector('.main');
  const ul = document.createElement('ul');

  for (let user of users) {
    let li = document.createElement('li');
    let newli = document.createElement('li');
    li.textContent = user.name + ":" + user.message;
    li.style.color = "black";
    li.style.background = user.color;
    li.style.margin = "20px";
    li.style.padding = "10px"
    li.style.font = "30px";
    newli.textContent = user.time;
    newli.style.marginLeft = "400px";
    ul.appendChild(li);
    ul.appendChild(newli);
    main.appendChild(ul);
    console.log(main)

  }
}

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
  const message = document.querySelector('.form-control').value;
  let user = localStorage.getItem("username")
  let color = localStorage.getItem("color")
  let today = new Date();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let newItem = {
    name: user,
    message: message,
    color: color,
    time: time

  };
  document.querySelector('.form-control').value = "";
  // const url ="https://nh-chat-app.herokuapp.com/message";
  const url = "http://localhost:5000/message";
  axios
    .post(url, newItem)
    .then(loadData)
}
function loadData() {
  // const url = "https://nh-chat-app.herokuapp.com/message";
  const url = "http://localhost:5000/message";
  axios
    .get(url)
    .then(resqustUser)

}

const btnSend = document.querySelector('.send');
btnSend.addEventListener('click', send);

let haslogin = localStorage.length > 0;
if (haslogin) {
  setInterval(loadData, 1000)
} else {
  window.location.href = "../index.html";
}
function logout() {
  localStorage.clear();
  window.location.href = "../index.html";
}
const singout = document.querySelector("#singout");
singout.addEventListener('click', logout)


let data =localStorage.getItem('username');
let pic1 ="../images/pic1.jpeg";
let pic2 ="../images/pic2.png";
let picture =document.querySelector('#pic1');
let p =document.querySelector('p');
p.textContent=data;
if(data === "sreyhieb"){
  picture.src =pic1
}else{
  picture.src=pic2
}
console.log(data);