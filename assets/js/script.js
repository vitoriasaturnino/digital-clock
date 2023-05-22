const hour = document.getElementById('hour');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const clock = setInterval( function time() {
  let dateToday = new Date();
  let hourNow = dateToday.getHours();
  let minutesNow = dateToday.getMinutes();
  let secondsNow = dateToday.getSeconds();

  if (hourNow < 10) hourNow = '0' + hourNow;
  if (minutesNow < 10) minutesNow = '0' + minutesNow;
  if (secondsNow < 10) secondsNow = '0' + secondsNow;

  hour.textContent = hourNow;
  minutes.textContent = minutesNow;
  seconds.textContent = secondsNow;
});

