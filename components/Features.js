import Goal from "../public/goal.svg";
import Sustain from "../public/sustain.svg";
import Vision from "../public/vision.svg";
import Right from "../public/right.svg";
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



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
                <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} delay={100} >
                  Meet The Team
                  <img src={Right} alt="arrow right" width={25} height={25} />
                </Link>
              </div>
            </div>
            <div className="features-list">
              <ul>
                <li>
                  <img src="/transform.png" alt="fast delivery" />
                  <h5>Transformative Change</h5>
                  <p>
                    We believe that equiping youths with adaptible skills
                    required in their domains of expertise will spearhead
                    growth.
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
                  <img src="/mission.png" alt="fast delivery" />
                  <h5>Mission</h5>
                  <p>
                    To transform communities through support networks and
                    provide access to resources through creation of intentional,
                    safe and dynamic spaces.
                  </p>
                </li>
                <li>
                  <img src={Goal} width={75} alt="fast delivery" />
                  <h5>Employment &amp; Opportunities</h5>
                  <p>
                    To increase employment and earning opportunities that
                    improve livelihood within kenyan communities, especially
                    marginalised communities.
                  </p>
                </li>
                <li>
                  <img src="./region.png" alt="region" />
                  <h5>Coverage </h5>
                  <p>
                    At the moment, we are centered in Nairobi and its Environs,
                    piloting community outreach programs and scaling
                    incrementally.
                  </p>
                </li>

                <li>
                  <img src={Sustain} width={75} alt="sustainability" />
                  <h5>Sustainability</h5>
                  <p>
                    We've joined hands at the grassroot level working on
                    sustaible youth projects that incorporate sustainability of
                    the planet.
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
