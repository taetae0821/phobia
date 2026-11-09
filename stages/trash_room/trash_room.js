const left_map = document.getElementById('left_map')

const black = document.getElementById("fade")

const urlscan = window.location.href;

let key = false;

let unlocked = false;

if(urlscan.includes("unlocked=1")){
  unlocked = true;
}

if(urlscan.includes("key=1")){
  key = true;
}


left_map.addEventListener('click', () => {
  setTimeout(() => {
    black.classList.add("fade-animation-in");
  }, 200);
    setTimeout(() => {
     if(unlocked==true&&key==true){
            window.location.href = "/stages/stage1_lobby.html?unlocked=1&key=1"
        }
        else if(unlocked==true&&key==false){
            window.location.href = "/stages/stage1_lobby.html?unlocked=1"
        }
        else if(unlocked==false&&key==true){
            window.location.href = "/stages/stage1_lobby.html?key=1"
        }
        else if(unlocked==false&&key==false){
            window.location.href = "/stages/stage1_lobby.html"
        }
    }, 600);
})

  const follower = document.getElementById('light');

    document.addEventListener('mousemove', (e) => {
      follower.style.left = `${e.pageX-220}px`;
      follower.style.top = `${e.pageY-220}px`;
    });