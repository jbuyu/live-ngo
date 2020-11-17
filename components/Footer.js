import { Button } from "./Button";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";

function Footer() {
  return (
    <div className="footer-container">
      {/* <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our exclusive membership &amp; receive the latest news and trends
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section> */}
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link href="/sign-up">How it works</Link>
            <Link href="/">Testimonials</Link>
            <Link href="/">Careers</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link href="/">Contact</Link>
            <Link href="/">Support</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link href="https://www.youtube.com/watch?v=SeWCX0GHm2s&ab_channel=BoldStepInitiative">
              Win Scholarship
            </Link>
            <Link href="https://www.youtube.com/watch?v=svDl0ub2eYQ&ab_channel=BoldStepInitiative">
              Resume
            </Link>
            <Link href="https://www.youtube.com/watch?v=OSz1TA-lkcI&ab_channel=BoldStepInitiative">
              Personal Finane
            </Link>
            <Link href="https://www.youtube.com/watch?v=IXIpZpEQoBQ&ab_channel=BoldStepInitiative">
              Start-Up
            </Link>
          </div>
          {/* <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link href="/">Instagram</Link>
            <Link href="/">Facebook</Link>
            <Link href="/">Youtube</Link>
            <Link href="/">Twitter</Link>
          </div> */}
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link href="/" className="social-logo">
              <div className="nav-plane">
                <MdFingerprint className="navbar-icon" />
                Boldstep Initiative
              </div>
            </Link>
          </div>
          <small className="website-rights">Boldstep Initiative © 2020</small>
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
  );
}

export default Footer;
