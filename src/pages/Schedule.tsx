export default function ScheduleSection() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#CDEEF8] to-[#5B91A1] flex flex-col justify-center items-center font-marcellus relative">
      <div className="bg-white text-[#242424] rounded-xl shadow-2xl p-12 max-w-4xl w-[90%] text-center">
        <h1 className="text-[64px] mb-10">Schedule</h1>
        <div className="text-[32px] leading-relaxed space-y-6">
          <p><strong>9:00 AM - 10:00 AM</strong> – Meet in hotel lobby and travel to classroom site</p>
          <p><strong>10:00 AM - 10:15 AM</strong> – Welcome, setup, and theme introduction</p>
          <p><strong>10:15 AM - 12:30 PM</strong> – Hacking begins</p>
          <p><strong>12:30 PM - 1:15 PM</strong> – Lunch break</p>
          <p><strong>1:15 PM - 3:00 PM</strong> – Hacking Continues</p>
          <p><strong>3:00 PM - 4:00 PM</strong> – Presentations</p>
          <p><strong>4:00 PM - 4:30 PM</strong> – Judging</p>
        </div>
      </div>

      {/* Cute images at the bottom */}
      <div className="absolute bottom-6 w-full flex justify-center gap-16">
        <img src="/assets/babbage.png" alt="Cute 1" className="w-24 h-auto" />
        <img src="/assets/lovelace.png" alt="Cute 2" className="w-24 h-auto" />
        <img src="/assets/turing.png" alt="Cute 3" className="w-24 h-auto" />
      </div>
    </div>
  );
}
