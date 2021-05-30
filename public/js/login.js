
// const rootEndPoint = "http://localhost:5000/user";
const rootEndPoint ="https://nh-chat-app.herokuapp.com/user";
function loginProcess(e) {
  e.preventDefault();
  axios.get(rootEndPoint).then(response => {
    let users = response.data;
    let isloginded = false;
    for (let user of users) {
      if (user.name == username.value && user.password == password.value && !isloginded) {
        isloginded = true;
        localStorage.setItem('username', user.name);
        localStorage.setItem('color', user.color);
      }
    }
    if (isloginded) {
      alert("Password Correct")
      window.location.href = "../chat.html";

    } else {
      alert("Password not correct")
    }

  })
}
let username = document.querySelector('#user');
let password = document.querySelector('#pwd');

const btnlogin = document.querySelector('#btn-login');
btnlogin.addEventListener('click', loginProcess);

let haslogin = localStorage.length > 0;
if (haslogin) {
  window.location.href = "../chat.html";
}