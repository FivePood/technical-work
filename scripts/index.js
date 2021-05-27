let deadline = new Date(Date.parse(new Date()) + 30 * 60 * 1000);
initializeTimer(deadline);

function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date());
  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  return {
    total: t,
    minutes: minutes,
    seconds: seconds
  };
}

function initializeTimer(endtime) {
  const minutesSpan = document.querySelector(".minutes");
  const secondsSpan = document.querySelector(".seconds");

  function updateTimer() {
    const t = getTimeRemaining(endtime);

    if (t.total <= 0) {
      location.reload();
    }

    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
  }

  updateTimer();
  let timeinterval = setInterval(updateTimer, 1000);
}