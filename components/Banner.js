import Image from "next/image";

export default function Banner() {
  return (
    <section class="banner" id="banner">
      <div id="bannerBgAddition" class="banner-addition-bg"></div>
      <div id="bannerBg" class="banner-bg"></div>
      <div class="container">
        <div class="row">
          <div class="banner-inner" id="bannerInner">
            <div class="content">
              <div class="content-inner">
                <h1>
                  <div class="line">
                    <span>Youthful Transformation</span>
                  </div>
                  <div class="line">
                    <span>in Africa</span>
                  </div>
                </h1>
                <p>
                  Trasforming communities by fostering connections and providing
                  access to resources through the creation of intentional, safe
                  and dynamic spaces.
                </p>
                <div class="btn-row">
                  <a href="/">Contact us today</a>
                </div>
                <div class="play-video">
                  <div class="play-video cover"></div>
                  <span>
                    <img src="./images/play.svg" alt="play icon" />
                    Watch Video
                  </span>
                </div>
              </div>
            </div>
            <div class="image">
              <div class="image-inner">
                <img src="./africa.svg" alt="Hand" />

                <Image
                  src="/africa.svg"
                  alt="africa"
                  width="50%"
                  height="50%"
                />
                <div class="feature-banner" id="featureBanner">
                  Youth guides
                </div>
                <div class="feature-banner green" id="featureBannerGreen">
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
