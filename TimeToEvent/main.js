const endTime = new Date("2024-12-24 17:00:00").getTime();

const spanDay = document.querySelector("span.d");
const spanHours = document.querySelector("span.h");
const spanMinutes = document.querySelector("span.m");
const spanSecounds = document.querySelector("span.s");

setInterval(() => {
  const nowTime = new Date().getTime();
  //   const time = Math.floor((endTime - nowTime) / 1000);
  const time = endTime - nowTime;
  let days = Math.floor(
    endTime / (1000 * 60 * 60 * 24) - nowTime / (1000 * 60 * 60 * 24)
  );
  let hours =
    Math.floor(endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24;

  let minutes = Math.floor(
    (endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60
  );
  let secounds = Math.floor((endTime / 1000 - nowTime / 1000) % 60);

  days = days < 10 ? `0${days}` : days;
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  secounds = secounds < 10 ? `0${secounds}` : secounds;

  spanDay.textContent = days;
  spanHours.textContent = hours;
  spanMinutes.textContent = minutes;
  spanSecounds.textContent = secounds;
}, 1000);
