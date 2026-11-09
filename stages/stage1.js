// import {open} from "./map/pined.mjs";

const black = document.getElementById("fade");

const stair = document.getElementById("stair");

const door = document.getElementById("door");

const next_screen = document.getElementById("next_screen");

let unlocked = false;

let urlscan = window.location.href;

if(urlscan.includes("unlocked=1")){
  unlocked = true;
}
let key = false;

if(urlscan.includes("key=1")){
  key = true;
}
stair.addEventListener("click", () => {
  setTimeout(() => {
    black.classList.add("fade-animation-in");
  }, 200);
  setTimeout(() => {
     if(unlocked==true&&key==true){
            window.location.href = "/stages/map/pined.html?unlocked=1&key=1"
        }
        else if(unlocked==true&&key==false){
            window.location.href = "/stages/map/pined.html?unlocked=1"
        }
        else if(unlocked==false&&key==true){
            window.location.href = "/stages/map/pined.html?key=1"
        }
        else{
            window.location.href = "/stages/map/pined.html"
        }
        
  }, 1200);
});

door.addEventListener("click", () => {
  setTimeout(() => {
    black.classList.add("fade-animation-in");
  }, 200);
  setTimeout(() => {
     if(unlocked==true&&key==true){
            window.location.href = "/stages/trash_room/trash_room.html?unlocked=1&key=1"
        }
        else if(unlocked==true&&key==false){
            window.location.href = "/stages/trash_room/trash_room.html?unlocked=1"
        }
        else if(unlocked==false&&key==true){
            window.location.href = "/stages/trash_room/trash_room.html?key=1"
        }
        else{
            window.location.href = "/stages/trash_room/trash_room.html"
        }
  }, 1200);
});

next_screen.addEventListener("click", () => {
  setTimeout(() => {
    black.classList.add("fade-animation-in");
  }, 200);
  setTimeout(() => {
     if(unlocked==true&&key==true){
            window.location.href = "/stages/road/road.html?unlocked=1&key=1"
        }
        else if(unlocked==true&&key==false){
            window.location.href = "/stages/road/road.html?unlocked=1"
        }
        else if(unlocked==false&&key==true){
            window.location.href = "/stages/road/road.html?key=1"
        }
        else {
            window.location.href = "/stages/road/road.html"
        }
  }, 1200);
});


const outdoor = document.getElementById("outdoor");



outdoor.addEventListener("click", () => {
  setTimeout(() => {
    black.classList.add("fade-animation-in");
  }, 200);
  setTimeout(() => {
       if(unlocked==true&&key==true){
            window.location.href = "../pined2.html?ul=1&key=1"
        }
        else if(unlocked==true&&key==false){
            window.location.href = "../pined2.html?ul=1"
        }
        else if(unlocked==false&&key==true){
            window.location.href = "../pined2.html?key=1"
        }
        else {
            window.location.href = "../pined2.html"
        }
    }, 1200);
  });


  const follower = document.getElementById('light');

    document.addEventListener('mousemove', (e) => {
      follower.style.left = `${e.pageX-220}px`;
      follower.style.top = `${e.pageY-220}px`;
    });