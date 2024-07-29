import { useContext } from "react";
import "./EventDetails.css";
import { DataContext } from "../../context/DataContext";

const EventDetails = () => {
  const { data } = useContext(DataContext);

  return (
    <div>
      <div className="event-poster p-2 ">
        <img src={data.event_poster_url} alt="poster" className="rounded-md" />
      </div>
      <div className="button-group">
        <button className="btn " id="About">
          About
        </button>
        <button className="btn " id="Tickets">
          Tickets
        </button>
        <button className="btn " id="speakers">
          This is speakers section
        </button>
        <button className="btn " id="workshop">
          This is workshop section
        </button>
        <button className="btn " id="event">
          This is event sponsors
        </button>
      </div>
    </div>
  );
};

export default EventDetails;
