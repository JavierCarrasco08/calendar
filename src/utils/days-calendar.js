export function daysCalendar() {
  const date = new Date(
    new Date().getUTCFullYear(),
    new Date().getMonth() + 1,
    0
  ).getDate();
  let data = [];
  const week = [];
  let next = 1;
  for (let day = 1; day <= date; day++) {
    let dayDate = new Date(
      new Date().getUTCFullYear(),
      new Date().getMonth(),
      day
    );

    data.push({
      day: dayDate.getDay(),
      num: dayDate.getDate(),
    });
    if (dayDate.getDay() === 6 || dayDate.getDate() === date) {
      week.push({
        id: next++,
        data: [...data],
      });
      data = [];
    }
  }
  return week;
}
