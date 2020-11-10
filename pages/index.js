import Head from "next/head";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ngo reel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className={styles.container}>
        <div>Main Ngo section</div>
      </div>
      <Footer />
    </>
  );
}
