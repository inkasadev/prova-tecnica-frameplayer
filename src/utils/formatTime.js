export const formatTime = (mili) => {
  let d, h, m, s;
  s = mili / 1000;

  d = Math.floor(s / 3600 / 24);
  h = Math.floor(s / 3600) % 24;
  s = s % 3600;

  m = Math.floor(s / 60);
  s = Math.floor(s % 60);

  let txtDay = d >= 10 ? d : d > 0 ? "0" + d : "00";
  let txtHour = h >= 10 ? h : h > 0 ? "0" + h : "00";
  let txtMinute = m >= 10 ? m : m > 0 ? "0" + m : "00";
  let txtSeconds = s >= 10 ? s : s > 0 ? "0" + s : "00";

  return {
    day: txtDay,
    hour: txtHour,
    minute: txtMinute,
    second: txtSeconds,
  };
};
