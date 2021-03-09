// import img from 'next/img'
import Seehub from "../public/see.png";
import Lilak from "../public/lilak.png";
import Amspace from "../public/amspace.png";
import wells from "../public/wells.png";

export default function Patners() {
  return (
    <div className="patners">
      <div className="meet-patners">
        <span>Patners</span>
      </div>
      <div className="patner-logos">
        <img src={wells} alt="see_hub" width={150} height={150}/>
        <img src={Seehub} alt="see_hub" width={150} height={150}/>
        <img src={Lilak} alt="see_hub" width={150} height={150}/>
        <img src={Amspace} alt="see_hub" width={150} height={150}/>
      </div>
    </div>
  );
}
