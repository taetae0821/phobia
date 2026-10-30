const left_map = document.getElementById('left_map')

const black = document.getElementById("fade")


left_map.addEventListener('click', () => {
  setTimeout(() => {
    black.classList.add("fade-animation-in");
  }, 200);
    setTimeout(() => {
    window.location.href = "/stages/stage1_lobby.html"
    }, 600);
})


const cup = document.getElementById('cup')
const memo = document.getElementById('memo')
const cup_zoom = document.getElementById('cup_zoom')
const memo_zoom = document.getElementById('memo_zoom')

let getter;
let count = 0;


cup.addEventListener('click', () => {
    if(getter == null){
    cup_zoom.classList.add("cup-in");
    count++;
    getter = cup;
    cup.style.pointerEvents = "none";
    }
    else{
        getter = memo;
        count=0;
    }
});

memo.addEventListener('click', () => {
    if(getter == null){
    memo_zoom.classList.add("memo-in");
    count++;
    getter = memo;
    memo.style.pointerEvents = "none";
    }
    else{
        getter = cup;
        count=0;
    }
});

document.addEventListener('click', ()=>{
    if(count == 0){
    console.log("허공")
    switch(getter){
        case cup:
            cup_zoom.classList.remove("cup-in");
            cup.style.pointerEvents = "auto";
            getter = null;
            break;
        case memo:
            memo_zoom.classList.remove("memo-in");
            memo.style.pointerEvents = "auto";
            getter = null;
            break;
        }
    }
    else{
        count=0;
    }
})

const floor = document.getElementById("floor");

floor.addEventListener('click',()=>{
    console.log("이동!")
  setTimeout(() => {
    black.classList.add("fade-animation-in");
  }, 200);
    setTimeout(() => {
    window.location.href = "/stages/chain.html"
    }, 600);
})