import Goal from "../public/goal.svg";
import Sustain from "../public/sustain.svg";
import Vision from "../public/vision.svg";

export default function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="row">
          <div className="features-inner">
            <div className="features-content">
              <h3>
                We are here to mould the next generation of African youths.
              </h3>
              <p>
                BoldStep Initiative aims to transform young people’s lives
                through education, mentorship, awareness creation and
                empowerment programs by creating a platform and safe space for
                communities to discover, develop and impact the society
                positively.
              </p>
              <div className="btn-row">
                <a href="/">
                  View All Services
                  <img src="./images/arrow-right.svg" alt="arrow right" />
                </a>
              </div>
            </div>
            <div className="features-list">
              <ul>
                <li>
                  <img src="/transform.png" alt="fast delivery" />
                  <h5>Transformative Change</h5>
                  <p>
                    We believe that a gradual change of the youths will
                    spearhead growth into the next decade
                  </p>
                </li>
                <li>
                  <img src="/mission.png" alt="fast delivery" />
                  <h5>Mission</h5>
                  <p>
                    To transform communities by fostering connections and
                    providing access to resources through the creation of
                    intentional, safe and dynamic spaces.
                  </p>
                </li>
                <li>
                  <img src={Goal} width={75} alt="fast delivery" />
                  <h5>Employment &amp; Opportunities</h5>
                  <p>
                    To increase employment and earning opportunities for
                    improved livelihoods among communities in Kenya.
                  </p>
                </li>
                <li>
                  <img src="./region.png" alt="region" />
                  <h5>Regions </h5>
                  <p>
                    At the moment, we are centerd in the Kenyan Capital and it's
                    Environs, piloting comunity outreach programs
                  </p>
                </li>
                <li>
                  <img src={Vision} width={75} alt="fast delivery" />
                  <h5>Vision</h5>
                  <p>
                    We believe that sustainable change stems from building
                    collective power at the community level. We envision a
                    future where all people have spaces to connect meaningfully
                    and access the resources they need to thrive.
                  </p>
                </li>
                <li>
                  <img src={Sustain} width={75} alt="sustainability" />
                  <h5>Sustainability</h5>
                  <p>
                    We join hands together working on sustaible youth projects
                    for the environment and greater good
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
