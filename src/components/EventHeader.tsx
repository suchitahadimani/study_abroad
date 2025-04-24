import React from "react";

function EventHeader() {
  return (
    <header>
      <h1 className="relative mt-0 text-6xl text-center text-white z-[2] max-md:-mt-20 max-md:text-5xl max-sm:px-5 max-sm:py-0 max-sm:mt-0 max-sm:text-4xl">
        CS ORIGINS HACKATHON 2025
      </h1>
      <time className="block mt-14 text-3xl text-center text-white z-[2] max-sm:text-2xl">
        January 12, 2025
      </time>
    </header>
  );
}

export default EventHeader;
