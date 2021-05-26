let errrorRequest = (error) => console.log.error("cannot get data");
function resqustUser(respone) {
  let users = respone.data;
  let list = document.querySelector('ul');
  if (list !== null) list.remove();
  const main = document.querySelector('.main');
  const ul = document.createElement('ul');
  for (let user of users) {
    let li = document.createElement('li');
    li.textContent = user.name + ":" + user.message;
    li.style.color = "blue";
    li.style.background = user.color;
    li.style.margin = "20px";
    li.style.padding = "10px"
    li.style.font = "30px";
    ul.appendChild(li);
    main.appendChild(ul);

  }
}

// funtion for user input and send
function send(event) {
  const message = document.querySelector('.form-control').value;
  let user = localStorage.getItem("username")
  let color = localStorage.getItem("color")

  let newItem = {
    name: user,
    message: message,
    color: color,

  };

  
  const url ="https://nh-chat-app.herokuapp.com/users";
  // const url = "http://localhost:5000/message";
  axios
    .post(url, newItem)
    .then(resqustUser)
}


function loadData() {
  const url = "https://nh-chat-app.herokuapp.com/users";
  // const url = "http://localhost:5000/message";
  axios
    .get(url)
    .then(resqustUser)
    .catch(errrorRequest)

}

const btnSend = document.querySelector('button');
btnSend.addEventListener('click', send);
setInterval(loadData, 1000)

// loadData();