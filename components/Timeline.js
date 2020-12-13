import timelineData from "./data";
import TimelineItem from "./TimelineItem";
const Timeline = () =>
  timelineData.length > 0 && (
    <div className="timeline-container">
      {timelineData.map((data, idx) => {
        return <TimelineItem data={data} key={idx} />;
      })}
    </div>
  );

export default Timeline;
