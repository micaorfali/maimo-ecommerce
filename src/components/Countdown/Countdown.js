import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { CountdownContainer, CountdownNumber } from "./styled";

const Countdown = () => {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const targetDate = dayjs("2023-11-09 21:00:00");
    const interval = setInterval(() => {
      const now = dayjs();
      const diff = targetDate.diff(now, "day");
      setCountdown(diff);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <CountdownContainer>
      <div className="container">
        {countdown >= 0 ? (
          <>
            <CountdownNumber>{Math.floor(countdown / 100)}</CountdownNumber>
            <CountdownNumber>
              {Math.floor((countdown % 100) / 10)}
            </CountdownNumber>
            <CountdownNumber>{countdown % 10}</CountdownNumber>
            <p className="dias">DÍAS</p>
          </>
        ) : (
          <span>El evento ha terminado</span>
        )}
      </div>
    </CountdownContainer>
  );
};

export default Countdown;
