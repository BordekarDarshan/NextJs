import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

function Statistics() {
  let router = useRouter();

  /* console.log(router) */

  return (
    <div className={styles.container}>
      <h1 onClick={() => router.push("/")}>{router.pathname}</h1>
      <h1>{router.query.slug}</h1>
    </div>
  );
}

export default Statistics;
