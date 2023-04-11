export function daysCalendar() {
  const date = +new Date(
    new Date().getUTCFullYear(),
    new Date().getMonth() + 1,
    0
  ).getDate();

  return date;
}
