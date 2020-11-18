import Link from "next/link";
import Bold from "../public/bold.svg";
export default function Header() {
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="header-inner">
            <div className="logo">
              <Link href="/">
                <img src="/bold.png" alt="bold logo" width={120} height={120} />
              </Link>
            </div>
            <div className="navigation">
              <nav>
                <ul>
                  <li>
                    <Link href="/about"> Challenge</Link>
                  </li>
                  <li>
                    <Link href="#"> Solution</Link>
                  </li>
                  <li>
                    <Link href="#"> Strategies</Link>
                  </li>
                  <li>
                    <Link href="#"> Patners</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="nav-donate">
              <div className="donate">
                <Link href="#"> Donate</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
