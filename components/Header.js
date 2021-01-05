import Link from "next/link";
// import Bold from "../public/bold.svg";
export default function Header() {
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="header-inner">
            <div className="logo">
              <Link href="/">
                <img src="/bold.png" alt="bold logo" width={120} height={120} style={{marginTop:"0.5em"}} />
              </Link>
            </div>
            <div className="navigation">
              <nav>
                <ul>
                  <li>
                    <Link href="/challenge"> Challenge</Link>
                  </li>
                  <li>
                    <Link href="/solution"> Solution</Link>
                  </li>
                  <li>
                    <Link href="/strategies"> Strategies</Link>
                  </li>
                  <li>
                    <Link href="/Team"> Team </Link>
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
