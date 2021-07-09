import styles from "../../../../styles/Home.module.css";
import { useRouter } from "next/router";

function SpecificClientProjectPage() {
  let router = useRouter();

  return (
    <div className={styles.container}>
      <h1>Specific project of that client</h1>
    </div>
  );
}

export default SpecificClientProjectPage;
