import { useRouter } from "next/router";
import styles from "./EventCard.module.css";

function EventCard({ data }) {
  let router = useRouter();
  const eventDetailsRouteHandler = (event) => {
    router.push({
      pathname: `/events/[eventid]`,
      query: { eventid: event },
    });
  };

  return (
    <div className={styles.cardContainer}>
      <img src={data.image} className={styles.imgContainer}></img>
      <h3>{data.title}</h3>
      <button onClick={() => eventDetailsRouteHandler(data.id)}>
        Event details
      </button>
    </div>
  );
}

export default EventCard;
