import { useEffect, useState } from "react";
import Hour from "./components/hour/Hour";

function App() {
  const [hour, setHour] = useState(new Date());

  useEffect(() => {
    let intervalId = setInterval(() => setHour(new Date()), 1000);

    return () => clearInterval(intervalId);
  });

  return (
    <main>
      <header>
        <Hour hour={hour.toLocaleTimeString()} />
      </header>
    </main>
  );
}

export default App;
