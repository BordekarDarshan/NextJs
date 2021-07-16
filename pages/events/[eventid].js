import { useRouter } from "next/router";
import { EVENT_LIST } from "../../Handlers/data";
import { showEventDetailsHandler } from "../../Handlers/methods";
import styles from "../../styles/Home.module.css";

function EventDetails() {
  let router = useRouter();
  let data = showEventDetailsHandler(EVENT_LIST, router.query.eventid);

  return data ? (
    <div className={styles.homeContainer}>
      <img src={data.image}></img>
      <h3>{data.title}</h3>
      <h4>{data.description}</h4>
      <h4>{data.location}</h4>
      <h4>{data.date}</h4>
    </div>
  ) : (
    <h1>Loading..</h1>
  );
}

export default EventDetails;
