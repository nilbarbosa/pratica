const button1=document.querySelector("#button1")
const button2=document.querySelector("#button2")
const button3=document.querySelector("#button3")
const text=document.querySelector("#text")
const xpText=document.querySelector("#xpText")
const healthText=document.querySelector("#healthText")
const goldText=document.querySelector("#goldText")
const monsterStats=document.querySelector("#monsterStats")
const monsterName=document.querySelector("#monsterName")
const monsterHealthText=document.querySelector("#monsterHealth")


function goStore() {
    button1.innerText = "Buy 10 health (10 gold)";
}

function goCave() {
    button2.innerText = "Buy weapon (30 gold)";
  }

function fightDragon() {
    button3.innerText = "Go to town square";
  }
  
//initialize buttons

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;