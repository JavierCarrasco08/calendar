import Week from "../week/Week";

export default function Calendar({ data, time }) {
  return (
    <table className="calendar">
      <caption>April {time.toLocaleString()}</caption>
      <thead className="calendar__week">
        <tr>
          <th className="calendar__day">S</th>
          <th className="calendar__day">M</th>
          <th className="calendar__day">T</th>
          <th className="calendar__day">W</th>
          <th className="calendar__day">T</th>
          <th className="calendar__day">F</th>
          <th className="calendar__day">S</th>
        </tr>
      </thead>
      <tbody>
        {data.map((el) => (
          <tr key={el.id}>
            <Week week={el.data} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
