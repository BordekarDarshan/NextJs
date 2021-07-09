import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  let router = useRouter();
  return (
    <div className={styles.container}>
      <h1 onClick={() => router.push("/about/statistics")}>Home</h1>
      <Link href="/clients">Our Clients</Link>
    </div>
  );
}
