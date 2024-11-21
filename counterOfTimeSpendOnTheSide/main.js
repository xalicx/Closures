const timeCounter = () => {
  let secounds = 0;
  const timer = () => {
    secounds++;
    document.body.textContent = `${secounds} secounds`;
  };
  return timer;
};

const start = timeCounter();

setInterval(start, 1000);
