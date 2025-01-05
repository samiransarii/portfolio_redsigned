import React from "react";

import { TimelineCircle, EventLogo } from "../utils/utils.component";
import EventContent from "../event_content/event_content.component";

const TimelineEvent = ({ event }) => (
  <div className="relative flex items-center">
    <TimelineCircle />
    <div className="ml-12 p-4 rounded shadow-md">
      <div className="flex flex-row items-center gap-8 pb-4">
        <EventLogo logo={event.logo} />
        <h3 className="font-semibold text-[2rem] sm:text-[2.6rem]">
          {event.title}
        </h3>
      </div>
      <EventContent event={event} />
    </div>
  </div>
);

export default TimelineEvent;
