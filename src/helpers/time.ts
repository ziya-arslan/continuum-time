function Time(timeIn: number): Array<number | string> {
  let hours: number = Math.floor(timeIn / 3600);
  let minutes: number = Math.floor((timeIn - hours * 3600) / 60);
  let seconds: number = timeIn - hours * 3600 - minutes * 60;

  let hoursFormat = hours < 10 ? `0${hours}` : hours;
  let minutesFormat = minutes < 10 ? `0${minutes}` : minutes;
  let secondsFormat = seconds < 10 ? `0${seconds}` : seconds;

  return [hoursFormat, minutesFormat, secondsFormat];
}

export default Time;

export const getNow = () => new Date().getTime();

export const formatTimeStampHHMMSS = (timestamp: any) => {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const time =
    (hours < 10 ? "0" : "") +
    hours +
    ":" +
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds;
  return time;
};
