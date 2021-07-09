import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";

function ClientListPage() {
  let router = useRouter();
  console.log(router);
  return (
    <div className={styles.container}>
      <h1>Client list Page</h1>
      <h1 onClick={() => router.push(router.asPath + "/darshan")}>Darshan</h1>
    </div>
  );
}

export default ClientListPage;
