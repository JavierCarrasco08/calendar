import { useState, useEffect } from "react";

export default function Hour() {
  const [hour, setHour] = useState(new Date());
  useEffect(() => {
    let intervalId = setInterval(() => setHour(new Date()), 1000);

    return () => clearInterval(intervalId);
  });
  return <h2>{hour.toLocaleTimeString()}</h2>;
}
