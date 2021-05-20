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

   // for put name user into using chat
   // const name =prompt('what is your name?');
   // appendMessage('you joined');


let text= {text:chatsend};
      const url = "";
       axios
       .post (url,text)
       .then(displayText)
}
function loadData(){
   const url = "";
   axios
   .post (url)
   .then(displayText)
}
const btnSend =document.querySelector('button');
btnSend.addEventListener('click',send);
loadData();