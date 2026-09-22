const black = document.getElementById("fade");

const stair = document.getElementById("stair");

stair.addEventListener("click", () => {
  setTimeout(() => {
    black.classList.add("fade-animation-in");
  }, 200);
  setTimeout(() => {
    window.location.href = "/stages/map/pined.html";
  }, 1200);
});
