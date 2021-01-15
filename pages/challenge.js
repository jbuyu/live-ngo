import Image from "next/image";
export default function Challenge() {
  return (
    <section className="challenge">
      <div className="challenge-inner">
        <div className="challenge-content">
          <p>
            Today, although most young people are educated, they encounter
            difficulties in entering and remaining in the labor market. For
            some, the transition to finding jobs is problematic. Mismatches
            between skills and the labor market can lead to long periods of job
            seeking intertwined with unemployment spells or periods of low
            skilled and precarious work. However, if equipped with the relevant
            skills there are numerous economical opportunities for the youths.
            In essense, the world has changed so much over the past couple of
            decades and equiping the youths with ideal skills in a competitive
            and constantly changing world is more than ideal.
          </p>
          <div className="image">
            <Image
              src="/challenge.svg"
              alt="challenge.svg"
              width="800"
              height="800"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
