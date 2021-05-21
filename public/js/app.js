function displayText(resposne){
    let texts =resposne.data;
 }
 function send(event){
    const chatsend= document.querySelector("#text").value;
    const ul =document.querySelector('ul');
    const li =document.createElement('li');
    li.textContent=chatsend;
    li.style.color="blue";
    ul.appendChild(li);
 
 let text= {text:chatsend};
       const url = "http://localhost:5000/users/";
        axios
        .post (url,text)
        .then(displayText)
 }
 function loadData(){
    const url = "http://localhost:5000/users/";
    axios
    .post (url)
    .then(displayText)
 }
 const btnSend =document.querySelector('button');
 btnSend.addEventListener('click',send);
 loadData();
