import Head from "next/head";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Udah</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="example">
        <Header />
        <Banner />
        <Features />

        {/* <Footer /> */}
      </div>
    </>
  );
}
