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
    li.style.color="blue";
    li.style.font="30px";
    ul.appendChild(li);
    main.appendChild(ul);

  }
}


function send(event) {
  const message = document.querySelector('#text').value;

  let newItem = {
    name: 'unknown', message: message
  };
  const url = "http://localhost:5000/users";
  axios
    .post(url, newItem)
    .then(resqustUser)
}



function loadData() {
  const url = "http://localhost:5000/users";
  axios
    .get(url)
    .then(resqustUser)
    .catch(errrorRequest)

}



const btnSend = document.querySelector('button');
btnSend.addEventListener('click', send);

loadData();