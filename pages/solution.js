import Image from "next/image";
export default function Solution() {
  return (
    <section className="solution">
      <div className="solution-inner">
        <div className="solution-content">
          <p>
            BoldStep Initiative, through its programs, broadly addresses gaps in
            business skills and competency for the Kenya youth, focusing on
            issues that include critical thinking necessary for generating
            initiative and innovation, problem solving and decision making. The
            programs emphasize on the application of principles of transferable
            skills in a competency based learning approach. We work with Kenyan
            youth aged <strong>18-29 </strong> years old, who are recent
            <strong>college / university</strong> graduates, young professionals
            and entrepreneurs to lay the foundation for their posperity.
          </p>
          <div className="image">
            <Image
              src="/solution.svg"
              alt="solutions svg"
              width="800"
              height="800"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
