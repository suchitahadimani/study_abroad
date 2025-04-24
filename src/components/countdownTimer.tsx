"use client";

import { useState, useEffect } from "react";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the target date to January 12, 2025
    const targetDate = new Date("January 12, 2025 00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    // Update immediately
    updateCountdown();

    // Then update every second
    const interval = setInterval(updateCountdown, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Format numbers to always have two digits
  const formatNumber = (num:any) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <section className="flex relative gap-10 justify-center mt-16 z-[2] max-md:gap-5 max-sm:flex-wrap max-sm:gap-4">
      <TimeUnit value={formatNumber(timeLeft.days)} label="Days" />
      <TimeUnit value={formatNumber(timeLeft.hours)} label="Hours" />
      <TimeUnit value={formatNumber(timeLeft.minutes)} label="Minutes" />
      <TimeUnit value={formatNumber(timeLeft.seconds)} label="Seconds" />
    </section>
  );
}

function TimeUnit(value:any, label:any) {
  return (
    <div className="text-center text-white max-md:text-3xl max-sm:w-[45%]">
      <div className="mb-2 text-4xl max-md:text-3xl max-sm:text-3xl">
        {value}
      </div>
      <div className="text-3xl max-md:text-3xl max-sm:text-2xl">{label}</div>
    </div>
  );
}

export default CountdownTimer;
