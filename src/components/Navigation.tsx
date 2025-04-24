import React from "react";

function Navigation() {
  return (
    <nav className="absolute top-5 right-5 z-[2] max-sm:hidden">
      <ul className="flex gap-6">
        <li className="text-3xl text-black cursor-pointer max-md:text-2xl">
          About
        </li>
        <li className="text-3xl text-black cursor-pointer max-md:text-2xl">
          tracks
        </li>
        <li className="text-3xl text-black cursor-pointer max-md:text-2xl">
          schedule
        </li>
        <li className="text-3xl text-black cursor-pointer max-md:text-2xl">
          faqs
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
