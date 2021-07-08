import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function Home() {
  let router = useRouter();
  return (
    <div className={styles.container}>
      <h1 onClick={() => router.push("/about/statistics")}>Home</h1>
    </div>
  );
}
