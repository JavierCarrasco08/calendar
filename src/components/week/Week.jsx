import { Fragment } from "react";

export default function Week({ week }) {
  let dayOne = week.find((e) => e.day === 0);
  let dayTwo = week.find((e) => e.day === 1);
  let dayThree = week.find((e) => e.day === 2);
  let dayFourth = week.find((e) => e.day === 3);
  let dayFive = week.find((e) => e.day === 4);
  let daySix = week.find((e) => e.day === 5);
  let daySeven = week.find((e) => e.day === 6);

  return (
    <>
      <td className="calendar__td">{dayOne ? dayOne.num : "  "}</td>
      <td className="calendar__td">{dayTwo ? dayTwo.num : "  "}</td>
      <td className="calendar__td">{dayThree ? dayThree.num : "  "}</td>
      <td className="calendar__td">{dayFourth ? dayFourth.num : "  "}</td>
      <td className="calendar__td">{dayFive ? dayFive.num : "  "}</td>
      <td className="calendar__td">{daySix ? daySix.num : "  "}</td>
      <td className="calendar__td">{daySeven ? daySeven.num : "  "}</td>
    </>
  );
}
