import Head from "next/head";
import Banner from "../components/Banner";
import Features from "../components/Features";

export default function Home() {
  return (
    <>
      <Head>
        <title>Udah</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="example">
        <Banner />
        <Features />
      </div>
    </>
  );
}
