import Link from "next/link";
export default function Header() {
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="header-inner">
            <div className="logo">J</div>
            <div className="navigation">
              <nav>
                <ul>
                  <li>
                    <Link href="#"> Next</Link>
                  </li>
                  <li>
                    <Link href="#"> Next</Link>
                  </li>
                  <li>
                    <Link href="#"> Next</Link>
                  </li>
                  <li>
                    <Link href="#"> Next</Link>
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
