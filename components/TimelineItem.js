const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data && data.category.color }}>
        {data && data.category.tag}
      </span>
      <p>{data && data.component}</p>
      <span className="circle"></span>
    </div>
  </div>
);

export default TimelineItem;
