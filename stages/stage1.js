const black = document.getElementById("fade");

const stair = document.getElementById("stair");

const door = document.getElementById("door");

stair.addEventListener("click", () => {
  setTimeout(() => {
    black.classList.add("fade-animation-in");
  }, 200);
  setTimeout(() => {
    window.location.href = "/stages/map/pined.html";
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