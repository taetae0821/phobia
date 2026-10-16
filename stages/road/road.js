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