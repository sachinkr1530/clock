import React, { useEffect, useState } from "react";
import "./Clock.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hh = time.getHours();
  const mm = time.getMinutes();
  const ss = time.getSeconds();

  const hourDeg = (hh % 12) * 30 + mm / 2;
  const minuteDeg = mm * 6;
  const secondDeg = ss * 6;

  const digitalHours = hh % 12 || 12;
  const ampm = hh >= 12 ? "PM" : "AM";

  return (
    <div className="clock-container">
      <div className="analog-clock">
        <div
          className="dot red-dot"
          style={{ transform: `rotate(${hourDeg}deg) translateY(-65px)` }}
        />
        <div
          className="dot yellow-dot"
          style={{ transform: `rotate(${minuteDeg}deg) translateY(-75px)` }}
        />
        <div
          className="dot green-dot"
          style={{ transform: `rotate(${secondDeg}deg) translateY(-85px)` }}
        />

        {[...Array(12)].map((_, i) => {
          const angle = (i + 1) * 30;
          return (
            <div
              key={i}
              className="number"
              style={{
                transform: `rotate(${angle}deg) translateY(-110px) rotate(-${angle}deg)`,
              }}
            >
              {i + 1}
            </div>
          );
        })}

        <div
          className="hand hour"
          style={{ transform: `rotate(${hourDeg}deg)` }}
        />
        <div
          className="hand minute"
          style={{ transform: `rotate(${minuteDeg}deg)` }}
        />
        <div
          className="hand second"
          style={{ transform: `rotate(${secondDeg}deg)` }}
        />
        <div className="center-dot" />
      </div>

      <div className="digital-clock">
        <span style={{ color: "red" }}>
          {digitalHours.toString().padStart(2, "0")}
        </span>{" "}
        :
        <span style={{ color: "yellow" }}>
          {mm.toString().padStart(2, "0")}
        </span>{" "}
        :
        <span style={{ color: "green" }}>{ss.toString().padStart(2, "0")}</span>
        <span className="ampm"> {ampm}</span>
      </div>
    </div>
  );
};

export default Clock;
