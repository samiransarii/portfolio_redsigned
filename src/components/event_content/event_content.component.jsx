import React from "react";

const EventContent = ({ event }) => (
  <div className="content pl-24">
    <div className="team-info">
      <p className="text-[2.8rem] font-medium pb-4">{event.team}</p>
      <p className="text-[2.2rem] font-normal pb-8 italic">{event.time}</p>
      <p className="text-[2.4rem] font-normal leading-relaxed">{event.desc}</p>
    </div>
  </div>
);

export default EventContent;
