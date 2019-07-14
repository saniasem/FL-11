function formatTime(time) {
  let day = 24;
  let minute = 60;
  let days = Math.floor(time / (day * minute));
  let hours = Math.floor((time % (day * minute)) / minute);
  let minutes = Math.floor((time % (day * minute)) % minute);

  return `${days} day(s) ${hours} hour(s) ${minutes} minute(s)`;
}

formatTime(120);
formatTime(59);
formatTime(3601);
