import "./week.css";

export default function Week({ week, today }) {
  let dayOne = week.find((e) => e.day === 0);
  let dayTwo = week.find((e) => e.day === 1);
  let dayThree = week.find((e) => e.day === 2);
  let dayFourth = week.find((e) => e.day === 3);
  let dayFive = week.find((e) => e.day === 4);
  let daySix = week.find((e) => e.day === 5);
  let daySeven = week.find((e) => e.day === 6);
  return (
    <>
      <td className={`calendar__td ${dayOne?.num === today ? "today" : null}`}>
        {dayOne ? dayOne.num : "  "}
      </td>
      <td className={`calendar__td ${dayTwo?.num === today ? "today" : null}`}>
        {dayTwo ? dayTwo.num : "  "}
      </td>
      <td className={`calendar__td ${dayThree?.num === today ? "today" : ""}`}>
        {dayThree ? dayThree.num : "  "}
      </td>
      <td className={`calendar__td ${dayFourth?.num === today ? "today" : ""}`}>
        {dayFourth ? dayFourth.num : "  "}
      </td>
      <td className={`calendar__td ${dayFive?.num === today ? "today" : ""}`}>
        {dayFive ? dayFive.num : "  "}
      </td>
      <td className={`calendar__td ${daySix?.num === today ? "today" : ""}`}>
        {daySix ? daySix.num : "  "}
      </td>
      <td className={`calendar__td ${daySeven?.num === today ? "today" : ""}`}>
        {daySeven ? daySeven.num : "  "}
      </td>
    </>
  );
}
