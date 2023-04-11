export default function Week({ week }) {
  return (
    <>
      {week.map((wk) => (
        <>
          <td key={wk.day === 0 && wk.num}>{wk.day === 0 && wk.num}</td>
          <td key={wk.day === 1 && wk.num}>{wk.day === 1 && wk.num}</td>
          <td key={wk.day === 2 && wk.num}>{wk.day === 2 && wk.num}</td>
          <td key={wk.day === 3 && wk.num}>{wk.day === 3 && wk.num}</td>
          <td key={wk.day === 4 && wk.num}>{wk.day === 4 && wk.num}</td>
          <td key={wk.day === 5 && wk.num}>{wk.day === 5 && wk.num}</td>
          <td key={wk.day === 6 && wk.num}>{wk.day === 6 && wk.num}</td>
        </>
      ))}
    </>
  );
}
