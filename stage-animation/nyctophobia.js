const video = document.getElementById("opening");

const first_text = document.getElementById("first");
const second_text = document.getElementById("second");

const all = document.getElementById("all");

setTimeout(() => {
  video.classList.add("opening");
  video.classList.add("close");
  console.log("end");
}, 5000);

setTimeout(() => {
  first_text.classList.add("first");
}, 5100);
setTimeout(() => {
  second_text.classList.add("second");
}, 5450);

setTimeout(() => {
  all.classList.add("start");
}, 7000);
setTimeout(() => {
  window.location.href = "../stages/stage1_lobby.html";
}, 7200);
