import React from "react";

const EventContent = ({ event }) => (
  <div className="content px-4 sm:px-8 md:pl-24">
    <div className="team-info">
      <p className="text-[1.8rem] sm:text-[2rem] md:text-[2.4rem] font-medium pb-4">
        {event.team}
      </p>
      <p className="text-[1.6rem] sm:text-[1.8rem] md:text-[2rem] font-normal pb-8 italic">
        {event.time}
      </p>
      <p className="text-[1.6rem] sm:text-[1.8rem] md:text-[2rem] font-normal leading-relaxed">
        {event.desc}
      </p>
    </div>
  </div>
);

export default EventContent;
