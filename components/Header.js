import Link from "next/link";
import Bold from "../public/bold.svg";
export default function Header() {
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="header-inner">
            <div className="logo">
              <img src="/bold.png" alt="bold logo" width={120} height={120} />
            </div>
            <div className="navigation">
              <nav>
                <ul>
                  <li>
                    <Link href="/about"> About</Link>
                  </li>
                  <li>
                    <Link href="#"> Impact</Link>
                  </li>
                  <li>
                    <Link href="#"> Insights</Link>
                  </li>
                  <li>
                    <Link href="#"> Help Out</Link>
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
