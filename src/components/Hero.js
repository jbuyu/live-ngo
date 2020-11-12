import Link from "next/link";
export default function Hero() {
  return (
    <header className="back relative bg-no-repeat bg-cover  bg-top-right">
      {/* <Link href="/">
        <h1>
          <span className="sr-only">AirBnb</span>
        </h1>
      </Link> */}

      {/* <div className="max-w-5xl mx-auto lg:py-32 py-4">
        <h2 className="lg:text-5xl text-4xl font-semibold text-white leading-none mb-4">
          Book a trip. Host travels. All on Airbnb.
        </h2>
        <div className="flex items-center flex-wrap justify-start max-w-2xl lg:mx-0 mx-auto">
          <div className="lg:pr-5 w-full lg:w-1/2 mb-4 lg:mb-0">
            <p className="text-white mb-2 tracking-wide">
              Find places to stay and things to do
            </p>
            <Link
              href="#"
              className="transition bg-white px-10 py-3 rounded font-bold hover:bg-gray-300 block w-full text-center border-2 border-white"
            >
              Explore
            </Link>
          </div>
          <div className="lg:pl-5 w-full lg:w-1/2">
            <p className="text-white mb-2 tracking-wide">
              Earn money from your extra space
            </p>
            <Link
              href="#"
              className="transition border-2 border-white bg-transparent px-10 py-3 rounded text-white font-bold hover:bg-gray-800 block w-full text-center"
            >
              Host
            </Link>
          </div>
        </div>
      </div> */}
      <style jsx>
        {`
          .back {
            width: 55%;
            height: 100%;
            position: absolute;
            background-image: url("/africa.svg");
          }
        `}
      </style>
    </header>
  );
}
