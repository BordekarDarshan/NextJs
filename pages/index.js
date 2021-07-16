import EventCard from "../components/EventCard";
import { EVENT_LIST } from "../Handlers/data";
import { fetchAllEventsHandler } from "../Handlers/Methods";
import styles from "../styles/Home.module.css";

function HomePage() {
  let featuredEvents = fetchAllEventsHandler(EVENT_LIST);

  return (
    <div className={styles.homeContainer}>
      {featuredEvents.length > 0 ? (
        featuredEvents.map((data) => <EventCard data={data} />)
      ) : (
        <h1>Not Found</h1>
      )}
    </div>
  );
}

export default HomePage;
