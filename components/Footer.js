import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>About Us</h2>
              <Link href="/sign-up">How it works</Link>
              <Link href="/">Testimonials</Link>
            </div>
            <div className="footer-link-items">
              <h2>Contact Us</h2>
              <Link href="/">Contact</Link>
              <Link href="/">Support</Link>
            </div>
            <div className="footer-link-items">
              <h2>Videos</h2>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/watch?v=SeWCX0GHm2s&ab_channel=BoldStepInitiative"
              >
                Win Scholarship
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/watch?v=svDl0ub2eYQ&ab_channel=BoldStepInitiative"
              >
                Resume
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/watch?v=OSz1TA-lkcI&ab_channel=BoldStepInitiative"
              >
                Personal Finane
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/watch?v=IXIpZpEQoBQ&ab_channel=BoldStepInitiative"
              >
                Start-Up
              </a>
            </div>
          </div>
        </div>
        <section className="social-media">
          <div className="social-media-wrap">
            {/* <small className="website-rights">Boldstep Initiative © 2020</small> */}
            <div className="social-icons">
              <div className="div-link">
                <a
                  className="social-icon-link"
                  aria-label="Facebook"
                  href="https://www.facebook.com/BoldStepInitiative/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
              </div>
              <div className="div-link">
                <a
                  className="social-icon-link"
                  href="https://www.instagram.com/boldstepinitiative/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
              <div className="div-link">
                <a
                  className="social-icon-link"
                  href={
                    "https://www.youtube.com/channel/UCNI5Pj8UyywIvMa8EAgzLGw/featured"
                  }
                  target="_blank"
                  aria-label="Youtube"
                >
                  <FaYoutube />
                </a>
              </div>
              <div className="div-link">
                <a
                  className="social-icon-link"
                  href="/"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
              </div>
              <div className="div-link">
                <a
                  className="social-icon-link"
                  href="https://www.linkedin.com/company/boldstep/"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
