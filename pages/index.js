import Head from "next/head";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ngo reel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div>
        <div>Main Ngo section</div>
      </div>
      <Footer />
    </>
  );
}
