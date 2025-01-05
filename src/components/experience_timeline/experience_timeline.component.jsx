import React from "react";
import { experiences } from "../../data/experience_data";
import TimelineEvent from "../timeline_event/timeline_event.component";
import { TimelineLine } from "../utils/utils.component";

const ExperienceTimeline = () => {
  return (
    <div className="relative m-8 text-5xl">
      <TimelineLine />
      <div className="space-y-12">
        {experiences.map((event) => (
          <TimelineEvent key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
