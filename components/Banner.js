// import Image from "next/image";
import Link from "next/link";
import Africa from "../public/africa.svg";

export default function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="banner-bg"></div>
      <div className="container">
        <div className="row">
          <div className="banner-inner" id="bannerInner">
            <div className="content">
              <div className="content-inner">
                <h1>
                  <div className="line">
                    <span>Trasformative Change</span>
                  </div>
                  <div className="line">
                    <span>For African Youths </span>
                  </div>
                </h1>
                <p>
                  Transforming communities by fostering connections and
                  providing access to resources through the creation of
                  intentional, safe and dynamic spaces.
                </p>
                <div className="btn-row">
                  <a href="/">Contact us today</a>
                </div>
                {/* <div className="play-video">
                  <div className="play-video cover"></div>
                  <span>
                    <a target="_blank" href="www.google.com">
                      <img src={Play} alt="play icon" />
                      Watch Video
                    </a>
                  </span>
                </div> */}
              </div>
            </div>
            <div className="image">
              <div className="image-inner">
                <img src={Africa} alt="africa" />
                <div className="feature-banner" id="featureBanner">
                  Youth Venture
                </div>
                <div className="feature-banner green" id="featureBannerGreen">
                  Growth
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
