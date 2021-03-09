import Seehub from "../public/see.png";
import Lilak from "../public/lilak.png";
import Image from 'next/image'

export default function Patners() {
  return (
    <div className="patners">
      <div className="meet-patners">
        <span>Patners</span>
      </div>
      <div className="patner-logos">
        <Image src={Seehub} alt="see_hub" width={150} height={150}/>
        <Image src={Lilak} alt="see_hub" width={150} height={150}/>
      </div>
    </div>
  );
}
