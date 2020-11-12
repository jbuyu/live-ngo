import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Udah</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="example">
        <Hero />

        <div>miami</div>
        {/* <Footer /> */}
      </div>
    </>
  );
}
