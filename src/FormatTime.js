export default function FormatTime(props) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const hours = [
    12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11,
  ];
  let localTime = new Date(props.time * 1000);
  let utcOffset = localTime.getTimezoneOffset() * 60000;
  let utcTimestamp = props.time * 1000 + utcOffset;
  let cityTimestamp = utcTimestamp + props.timezone * 1000;
  let cityTime = new Date(cityTimestamp);
  let cityDay = days[cityTime.getDay()];
  let cityHour = hours[cityTime.getHours()];
  let cityMinute = cityTime.getMinutes();
  let militaryTime = cityTime.getHours();
  let amPm = null;
  if (cityMinute < 10) {
    cityMinute = `0${cityMinute}`;
  }
  if (militaryTime < 12) {
    amPm = "AM";
  } else {
    amPm = "PM";
  }
  return (
    <span>
      {cityDay}, {cityHour}:{cityMinute} {amPm}
    </span>
  );
}
