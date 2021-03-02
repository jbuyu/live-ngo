import Head from "next/head";
import Banner from "../components/Banner";
import Features from "../components/Features";
import { ImageSlider } from "../components/ImageSlider";
import Patners from "../components/Patners";
import { SliderData } from "../components/SliderData";

export default function Home() {
  return (
    <>
      <Head>
        <title>Boldstep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Features />
      <ImageSlider slides = {SliderData} />
      {/* <Patners /> */}
    </>
  );
}
