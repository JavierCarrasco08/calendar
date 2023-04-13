import "./week.css";

export default function Week({ week, today }) {
  let [dayOne, dayTwo, dayThree, dayFourth, dayFive, daySix, daySeven] = week;
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
