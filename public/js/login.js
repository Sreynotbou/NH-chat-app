let loginProcess=(response,username,pass)=>{
    let users =response.data;
    let isLogined =false;
    for (let user of users){
      if(user.name ===username && user.password===pass && !isLogined){
        window.location.href=rootEndPoint +"/chat.html";
        isLogined =true;
      
        localStorage.setItem('username',user.name);
        localStorage.setItem('color',user.color);
      }
    }

    if(isLogined){
      alert("Login successfully")
    }else{
      alert("login failed")
    }
  }

  let login =(e)=>{
    let username =document.querySelector('#user').value;
    let password =document.querySelector('#pwd').value;
    const url =rootEndPoint+"/users";
    axios
    .get(url)
    .then(res => loginProcess(res,username,password))
  
  }
  const btnlogin =document.querySelector('#btn-login');
  // const rootEndPoint ="http://localhost:5000";
  const rootEndPoint ="https://nh-chat-app.herokuapp.com";
  btnlogin.addEventListener('click',login);