import Head from "next/head";
import Navbar from "../src/components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ngo reel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div>Main Ngo section</div>
    </div>
  );
}
