import { useState, useEffect } from 'react';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function CountdownTimer({ targetDate }: { targetDate: number }) {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(
    calculateTimeRemaining(targetDate)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  function calculateTimeRemaining(targetDate: number): TimeRemaining {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div className="countdown">
    <div>
        <div>{timeRemaining.days.toString().padStart(2, '0')}</div>
        <div>days</div>
    </div>
    <div>
        <div>{timeRemaining.hours.toString().padStart(2, '0')}</div>
        <div>hours</div>
    </div>
    <div>
        <div>{timeRemaining.minutes.toString().padStart(2, '0')}</div>
        <div>minutes</div>
    </div>
    <div>
        <div>{timeRemaining.seconds.toString().padStart(2, '0')}</div>
        <div>seconds</div>
    </div>
    </div>

  );
}

export default CountdownTimer;
