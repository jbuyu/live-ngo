// import Image from "next/image";
import Africa from "../public/africa.svg";

export default function Banner() {
  return (
    <section className="banner" id="banner">
      <div id="bannerBgAddition" className="banner-addition-bg"></div>
      <div id="bannerBg" className="banner-bg"></div>
      <div className="container">
        <div className="row">
          <div className="banner-inner" id="bannerInner">
            <div className="content">
              <div className="content-inner">
                <h1>
                  <div className="line">
                    <span>Youthful Transformation</span>
                  </div>
                  <div className="line">
                    <span>in Africa</span>
                  </div>
                </h1>
                <p>
                  Trasforming communities by fostering connections and providing
                  access to resources through the creation of intentional, safe
                  and dynamic spaces.
                </p>
                <div className="btn-row">
                  <a href="/">Contact us today</a>
                </div>
                <div className="play-video">
                  <div className="play-video cover"></div>
                  <span>
                    <img src="./images/play.svg" alt="play icon" />
                    Watch Video
                  </span>
                </div>
              </div>
            </div>
            <div className="image">
              <div className="image-inner">
                {/* <img src="./africa.svg" alt="Hand" /> */}

                <img src={Africa} alt="africa" width={500} height={400} />
                <div className="feature-banner" id="featureBanner">
                  Youth guides
                </div>
                <div className="feature-banner green" id="featureBannerGreen">
                  No child left behind
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
