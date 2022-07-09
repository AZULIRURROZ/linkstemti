

var n = 3;

window.onload = function() {

    if (localStorage.getItem("theme") === "0"){
  n= 0;  
document.getElementById("theme").classList.add('theme0');
document.getElementById("theme").classList.remove('theme1','theme2','theme3','theme4','theme5','theme6','theme7','theme8','theme9');
}

    if (localStorage.getItem("theme") === "1"){
  n= 1;  
document.getElementById("theme").classList.add('theme1');
document.getElementById("theme").classList.remove('theme0','theme2','theme3','theme4','theme5','theme6','theme7','theme8','theme9');
}

    if (localStorage.getItem("theme") === "2"){
  n= 2;  
document.getElementById("theme").classList.add('theme2');
document.getElementById("theme").classList.remove('theme0','theme1','theme3','theme4','theme5','theme6','theme7','theme8','theme9');
}

    if (localStorage.getItem("theme") === "3"){
  n= 3;  
document.getElementById("theme").classList.add('theme3');
document.getElementById("theme").classList.remove('theme0','theme1','theme2','theme4','theme5','theme6','theme7','theme8','theme9');
}

    if (localStorage.getItem("theme") === "4"){
  n= 4;  
document.getElementById("theme").classList.add('theme4');
document.getElementById("theme").classList.remove('theme0','theme1','theme2','theme3','theme5','theme6','theme7','theme8','theme9');
}

    if (localStorage.getItem("theme") === "5"){
  n= 5;  
document.getElementById("theme").classList.add('theme5');
document.getElementById("theme").classList.remove('theme0','theme1','theme2','theme3','theme4','theme6','theme7','theme8','theme9');
}

    if (localStorage.getItem("theme") === "6"){
  n= 6;  
document.getElementById("theme").classList.add('theme6');
document.getElementById("theme").classList.remove('theme0','theme1','theme2','theme3','theme4','theme5','theme7','theme8','theme9');
}

    if (localStorage.getItem("theme") === "7"){
  n= 7;  
document.getElementById("theme").classList.add('theme7');
document.getElementById("theme").classList.remove('theme0','theme1','theme2','theme3','theme4','theme5','theme6','theme8','theme9');
}

    if (localStorage.getItem("theme") === "8"){
  n= 8;  
document.getElementById("theme").classList.add('theme8');
document.getElementById("theme").classList.remove('theme0','theme1','theme2','theme3','theme4','theme5','theme6','theme7','theme9');
}

    if (localStorage.getItem("theme") === "9"){
  n= 9;  
document.getElementById("theme").classList.add('theme9');
document.getElementById("theme").classList.remove('theme0','theme1','theme2','theme3','theme4','theme5','theme6','theme7','theme8');
}
}


function changeThemeReset(){
if (n == 9) {
  n= -1;  }
}

function increaseTheme(){

  n++;
  return n;
}

function changeTheme(){
if (n == 0) {

document.getElementById("theme").classList.add('theme0');
document.getElementById("theme").classList.remove('theme1','theme2','theme3','theme4','theme5','theme6','theme7','theme8','theme9');
localStorage.setItem("theme",0);
  }
if (n == 1) {

document.getElementById("theme").classList.add('theme1');
document.getElementById("theme").classList.remove('theme0','theme2','theme3','theme4','theme5','theme6','theme7','theme8','theme9');
localStorage.setItem("theme",1);

  }
if (n == 2) {

document.getElementById("theme").classList.add('theme2');
document.getElementById("theme").classList.remove('theme0','theme1','theme3','theme4','theme5','theme6','theme7','theme8','theme9');
localStorage.setItem("theme",2);

  }
if (n == 3) {

document.getElementById("theme").classList.add('theme3');
document.getElementById("theme").classList.remove('theme0','theme1','theme2','theme4','theme5','theme6','theme7','theme8','theme9');
localStorage.setItem("theme",3);

  }
if (n == 4) {

document.getElementById("theme").classList.add('theme4');
document.getElementById("theme").classList.remove('theme0','theme1','theme2','theme3','theme5','theme6','theme7','theme8','theme9');
localStorage.setItem("theme",4);

  }
if (n == 5) {

document.getElementById("theme").classList.add('theme5');
document.getElementById("theme").classList.remove('theme0','theme1','theme2','theme3','theme4','theme6','theme7','theme8','theme9');
localStorage.setItem("theme",5);

  }
if (n == 6) {

document.getElementById("theme").classList.add('theme6');
document.getElementById("theme").classList.remove('theme0','theme1','theme2','theme3','theme4','theme5','theme7','theme8','theme9');
localStorage.setItem("theme",6);

  }
if (n == 7) {

document.getElementById("theme").classList.add('theme7');
document.getElementById("theme").classList.remove('theme0','theme1','theme2','theme3','theme4','theme5','theme6','theme8','theme9');
localStorage.setItem("theme",7);

  }
if (n == 8) {

document.getElementById("theme").classList.add('theme8');
document.getElementById("theme").classList.remove('theme0','theme1','theme2','theme3','theme4','theme5','theme6','theme7','theme9');
localStorage.setItem("theme",8);

  }
if (n == 9) {

document.getElementById("theme").classList.add('theme9');
document.getElementById("theme").classList.remove('theme0','theme1','theme2','theme3','theme4','theme5','theme6','theme7','theme8');
localStorage.setItem("theme",9);

  }
}
