const map = document.getElementById("map")
const table = document.getElementById("table_test")

table.addEventListener('click',() => {
    map.classList.add("upScale")
    table.style.pointerEvents = "none"
    
})

document.addEventListener('click', ()=>{
    console.log("허공")
})