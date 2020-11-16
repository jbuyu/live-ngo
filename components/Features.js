import Fast from "../public/fast-delivery.svg";

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
                  <img src={Fast} alt="fast delivery" />
                  <h5>Fast Delivery</h5>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Qui dolorum rerum vero.
                  </p>
                </li>
                <li>
                  <img src="./images/0-fees.svg" alt="fast delivery" />
                  <h5>Transformative Change</h5>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Qui dolorum rerum vero.
                  </p>
                </li>
                <li>
                  <img src="./images/0-interest.svg" alt="fast delivery" />
                  <h5>0% Interest</h5>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Qui dolorum rerum vero.
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
                  <img src="./images/chat-support.svg" alt="fast delivery" />
                  <h5>Chat Support</h5>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Qui dolorum rerum vero.
                  </p>
                </li>
                <li>
                  <img
                    src="./images/fixed-payment-option.svg"
                    alt="fast delivery"
                  />
                  <h5>Fixed Payment Option</h5>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Qui dolorum rerum vero.
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
