import "./styles.css";
// import diff from "jest-diff";

// You're gonna need this
function getHeadline() {
  const title = document.createElement("h1");
  document.body.appendChild(title);
}
window.onload = getHeadline();

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const today = new Date();
  const difference = xmasDay - today;
  const days = Math.floor(difference / (24 * 60 * 60 * 1000));
  const hours = Math.floor(
    (difference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  );
  const minutes = Math.floor((difference % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((difference % (60 * 1000)) / 1000);
  const headline = document.querySelector("h1");
  headline.innerHTML = `2020년 12월 25일 크리스마스이브까지 ${days}일 ${hours}시간 ${minutes}분 ${seconds}초 남았습니다.`;
}

function init() {
  setInterval(getTime, 1000);
}

init();
