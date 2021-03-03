import Timeline from "../components/Timeline";

export default function Strategies() {
  return (
    <section className="strategies">
      <div className="strategic-components">
        <h2>
          <strong>Strategic components</strong>
        </h2>
        <p>
          Aligned below You can see the strategic components that we aim to
          realise our goals
        </p>
      </div>
      <div className="content">
        <div className="content-inner">
          <div className="strategies">
            <Timeline />
          </div>
        </div>
      </div>
    </section>
  );
}
