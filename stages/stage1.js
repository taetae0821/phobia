// import {open} from "./map/pined.mjs";

const black = document.getElementById("fade");

const stair = document.getElementById("stair");

const door = document.getElementById("door");

let open = false;

stair.addEventListener("click", () => {
  setTimeout(() => {
    black.classList.add("fade-animation-in");
  }, 200);
  setTimeout(() => {
    if(open==true){
    window.location.href = "/stages/map/pined.html?unlocked=1";}
    else if(open==false){
    window.location.href = "/stages/map/pined.html";}
  }, 1200);
});

door.addEventListener("click", () => {
  setTimeout(() => {
    black.classList.add("fade-animation-in");
  }, 200);
  setTimeout(() => {
    window.location.href = "/stages/trash_room/trash_room.html";
  }, 1200);
});
