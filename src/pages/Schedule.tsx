import { useEffect, useState } from 'react';
import scheduleData from '../utils/schedule.json'; // import the JSON file

const Schedule = () => {
  const [schedule, setSchedule] = useState<any[]>([]);
  const [highlightedRow, setHighlightedRow] = useState<number | null>(null);

  useEffect(() => {
    // Simulate fetching data
    setSchedule(scheduleData);

    // Check and highlight the appropriate row based on the current time
    const interval = setInterval(() => {
      const now = new Date();
      let currentRow = null;

      // Loop through the schedule and compare times
      for (let i = 0; i < scheduleData.length; i++) {
        const { time } = scheduleData[i];

        // Skip "TBD" events
        if (time === "TBD") {
          continue;
        }

        // Parse time (hours and minutes) for comparison
        const [startTime, endTime] = time.split(' - ');

        // Convert start time to a Date object
        const startDate = parseTimeToDate(startTime);
        let endDate = parseTimeToDate(endTime || startTime);

        // Check if the current time is between the start and end time
        if (now >= startDate && now <= endDate) {
          currentRow = i;
          break;
        }
      }

      setHighlightedRow(currentRow);

    }, 1000); // Update every second

    return () => clearInterval(interval); // Clean up the interval when the component unmounts

  }, [scheduleData]);

  // Helper function to parse time in HH:MM AM/PM format to Date object
  const parseTimeToDate = (time: string) => {
    const [timePart, modifier] = time.split(' '); // split time and AM/PM part
    const [hours, minutes] = timePart.split(':').map(Number);
    
    const date = new Date();
    let adjustedHours = hours;

    // Adjust hour for AM/PM
    if (modifier === 'PM' && hours < 12) {
      adjustedHours += 12;
    } else if (modifier === 'AM' && hours === 12) {
      adjustedHours = 0; 
    }

    date.setHours(adjustedHours, minutes, 0, 0);

    return date;
  };

  return (
    <section id='schedule'>
      <h2>Schedule</h2>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Event</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <tr key={index} className={highlightedRow === index ? 'highlighted' : ''}>
              <td>{item.time}</td>
              <td>{item.event}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Schedule;
