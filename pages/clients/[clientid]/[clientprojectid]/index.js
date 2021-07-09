import styles from "../../../../styles/Home.module.css";
import { useRouter } from "next/router";

function SpecificClientProjectPage() {
  let router = useRouter();
  console.log(router);
  return (
    <div className={styles.container}>
      <h1 onClick={() => router.push("darshan/project-github")}>
        Specific project of that client
      </h1>
    </div>
  );
}

export default SpecificClientProjectPage;
