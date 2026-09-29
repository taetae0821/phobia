const map = document.getElementById("map")
const table = document.getElementById("table_test")

const left_map = document.getElementById("left_map")

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

left_map.addEventListener('click', () => {
    count++;
    window.location.href = "/stages/map/pined.html?unlocked=1"
})