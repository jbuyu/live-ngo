import Head from "next/head";
import Footer from "../src/components/Footer";
import Hero from "../src/components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Udah</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="antialiased text-gray-800">
        <Hero />

        <div></div>
        {/* <Footer /> */}
      </div>
    </>
  );
}
