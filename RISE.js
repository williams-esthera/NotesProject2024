const wrapper = document.querySelector('.wrapper');
const  loginLink= document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const email = document.getElementById('email')
const pass = document.getElementById('pass')
const btn = document.querySelector('.btn')



registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

function saveData(){
   
    const e = document.getElementsByClassName('Register');
    localStorage.setItem('userData', e)
    userName = localStorage.getItem('userData')
}

function login(){;
    fetch("login.txt")
    .then(Response => Response.text())
     .then(data => {
        var users = data.split('\n');
        var valid  = false;
        for (var i = 0; i < users.length; i++){
            var user = users[i].split(',');
             if (user[0] === email && user[1] === pass){
                valid = true;
                break;
             }
        }
     })
      if (valid === true){
        alert ('F**king finaly')
      } else {
        alert (' WHYYYYYYY!!!!!!!')
      }
    }

    btn.addEventListener('click',login)
