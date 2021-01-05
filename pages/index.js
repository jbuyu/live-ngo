import Head from "next/head";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Patners from "../components/Patners";

export default function Home() {
  return (
    <>
      <Head>
        <title>Boldstep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Features />
      <Patners />
    </>
  );
}
