import { useEffect, useState } from "react";
import Hour from "./components/hour/Hour";
import { daysCalendar } from "./utils/days-calendar";
import Calendar from "./components/calendar/Calendar";

function App() {
  const [hour, setHour] = useState(new Date());

  /* useEffect(() => {
    let intervalId = setInterval(() => setHour(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, [hour]); */
  return (
    <main>
      <header className="hero">
        <Hour hour={hour.toLocaleTimeString()} />
      </header>
      <Calendar data={daysCalendar()} time={hour} />
    </main>
  );
}

export default App;
