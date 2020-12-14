const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.category.color }}>
        <div className="tag-content">{data.category.tag}</div>
      </span>
      {/* <p className="component">{data.component}</p> */}
      <p className="text">{data.text}</p>
      <span className="circle"></span>
    </div>
  </div>
);

export default TimelineItem;
