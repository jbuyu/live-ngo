import Patlogo1 from "../public/patlogo1.svg";
import Patlogo2 from "../public/patlogo2.svg";
import Patlogo3 from "../public/patlogo3.svg";
import Patlogo4 from "../public/patlogo4.svg";

export default function Patners() {
  return (
    <div className="patners">
      <div className="meet-patners">
        <span>Patners</span>
      </div>
      <div className="patner-logos">
        <img src={Patlogo1} alt="patner_logo" width={100} />
        <img src={Patlogo2} alt="patner_logo" width={100} />
        <img src={Patlogo3} alt="patner_logo" width={100} />
        {/* <img src={Patlogo4} alt="patner_logo" width={100} /> */}
      </div>
    </div>
  );
}
