const play_click = document.getElementById("playable-button");

const allSelecter = document.getElementById("group");

const selectPage = document.getElementById("selectPage");

const stages = document.getElementById("stages");

const stage_Image = document.getElementById("StageInfo");

const rightImage = document.getElementById("stage-1");
const middleImage = document.getElementById("stage-2");
const leftImage = document.getElementById("stage-3");

const stageText = document.getElementById("mainTag");

const poster = document.getElementById("poster");

const btn = document.getElementById("buttons");
const btn_in = document.getElementById("button-in");
const btn_back = document.getElementById("button-out");

const et = document.getElementById("everything");

play_click.addEventListener("click", function () {
  play_click.style.animation = "paused";
  allSelecter.classList.add("fade");

  setTimeout(() => {
    leftImage.style.pointerEvents = "none";
    middleImage.style.pointerEvents = "none";
    rightImage.style.pointerEvents = "none";

    selectPage.classList.add("select");
    stages.classList.add("selected");
  }, 500);
  setTimeout(() => {
    leftImage.classList.add("stages-left");
    rightImage.classList.add("stages-right");
  }, 200);
  setTimeout(() => {
    leftImage.classList.remove("stages-left");
    rightImage.classList.remove("stages-right");
  }, 2100);
  setTimeout(() => {
    leftImage.classList.add("stage-right");
    rightImage.classList.add("stage-left");

    leftImage.style.pointerEvents = "auto";
    middleImage.style.pointerEvents = "auto";
    rightImage.style.pointerEvents = "auto";
  }, 2110);
});

rightImage.addEventListener("click", function () {
  console.log("1번째 스테이지 로드 완료");
  leftImage.classList.remove("stage-right");

  middleImage.classList.add("hide");
  leftImage.classList.add("hide");

  rightImage.style.pointerEvents = "none";

  rightImage.classList.remove("stage-left");
  rightImage.classList.add("selected-left");

  stageText.classList.add("hide-text");

  setTimeout(() => {
    poster.classList.add("post-in");
    btn.classList.add("btn-in");
  }, 300);

  setTimeout(() => {
    poster.classList.remove("post-in");
    poster.classList.add("post-stay");
  }, 600);
});
middleImage.addEventListener("click", function () {
  // console.log("2번째 스테이지 로드 완료");
  // leftImage.classList.remove("stage-right");
  // rightImage.classList.remove("stage-left");
  // rightImage.classList.add("hide-left");
  // leftImage.classList.add("hide");
  // middleImage.style.pointerEvents = "none";
  // middleImage.classList.add("selected-middle");
  // stageText.classList.add("hide-text");
  // setTimeout(() => {
  //   poster.classList.add("post-in");
  // }, 300);
});
leftImage.addEventListener("click", function () {
  // console.log("3번째 스테이지 로드 완료");
  // rightImage.classList.remove("stage-left");
  // middleImage.classList.add("hide-left");
  // rightImage.classList.add("hide-left");
  // leftImage.style.pointerEvents = "none";
  // leftImage.classList.remove("stage-right");
  // leftImage.classList.add("selected-right");
  // stageText.classList.add("hide-text");
  // setTimeout(() => {
  //   poster.classList.add("post-in");
  // }, 300);
});

btn_back.addEventListener("click", function () {
  poster.classList.remove("post-stay");
  poster.classList.add("post-out");
  setTimeout(() => {
    rightImage.classList.add("back-right");
  }, 100);
  setTimeout(() => {
    poster.classList.remove("post-out");
  }, 300);
  setTimeout(() => {
    stageText.classList.remove("hide-text");
    stageText.classList.add("show-text");
    rightImage.classList.remove("selected-left");
  }, 400);
  setTimeout(() => {
    btn.classList.remove("btn-in");
    btn.classList.add("btn-out");

    rightImage.classList.remove("hide");
    leftImage.classList.remove("hide");
    middleImage.classList.remove("hide");

    rightImage.style.pointerEvents = "auto";

    stageText.classList.remove("show-text");
  }, 500);

  setTimeout(() => {
    btn.classList.remove("btn-out");
    rightImage.classList.remove("back-right");

    rightImage.classList.add("stage-left");
    leftImage.classList.add("stage-right");
  }, 900);
});

btn_in.addEventListener("click", function () {
  setTimeout(() => {
    et.style.pointerEvents = "none";
    et.classList.add("start-game");
  }, 200);
  setTimeout(() => {
    window.location.href = "../stage-animation/stage1_nyctophobia.html";
  }, 800);
});
