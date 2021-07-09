import styles from "../../../styles/Home.module.css";
import { useRouter } from "next/router";

function SpecificClientPage() {
  let router = useRouter();
  console.log(router);
  return (
    <div className={styles.container}>
      <h1>Projects list of that Client page</h1>
      {/* Can' give "clients/darshan/project-github" path in push method if i do so, then the path will look like "clients/clients/darshan/project-github" */}
      <h1 onClick={() => router.push(router.asPath + "/project-github")}>
        Project Github
      </h1>
    </div>
  );
}

export default SpecificClientPage;
