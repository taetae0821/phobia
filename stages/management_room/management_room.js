const map = document.getElementById("map")
const table = document.getElementById("table_test")

const left_map = document.getElementById("left_map")
const black = document.getElementById("fade")

let count = 0;

table.addEventListener('click',() => {
    map.classList.remove("downScale")
    map.classList.add("upScale")
    table.style.pointerEvents = "none"
    count++;
})

document.addEventListener('click', ()=>{
    if(count == 0){
    console.log("허공")
    map.classList.remove("upScale")
    map.classList.add("downScale")
    table.style.pointerEvents = "auto"}
    else{
        count=0;
    }
})

const urlscan = window.location.href;

let key = false;

let unlocked = true;

if(urlscan.includes("key=1")){
  key = true;
}

left_map.addEventListener('click', () => {
  setTimeout(() => {
    black.classList.add("fade-animation-in");
  }, 200);
    count++;
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
        else if(unlocked==false&&key==false){
            window.location.href = "/stages/map/pined.html"
        }
    }, 600);
})

  const follower = document.getElementById('light');

    document.addEventListener('mousemove', (e) => {
      follower.style.left = `${e.pageX-220}px`;
      follower.style.top = `${e.pageY-220}px`;
    });