import Timeline from "../components/Timeline";

export default function Strategies() {
  return (
    <section className="strategies">
      <div className="strategies-bg"></div>
      <div className="container">
        <div className="row">
          <div className="strategies-inner" id="strategiesInner">
            <div className="content">
              <div className="content-inner">
                <h1>
                  <div className="strategies">
                    <Timeline />
                  </div>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
