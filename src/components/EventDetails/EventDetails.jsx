import { useContext } from "react";
import "./EventDetails.css";
import { DataContext } from "../../context/DataContext";
import About from "../About/About";
import Ticket from "../Ticket/Ticket";
import Sponsors from "../Sponsors/Sponsors";
import Workshops from "../Workshops/Workshops";
import Speakers from "../Speakers/Speakers";

const EventDetails = () => {
  const { data } = useContext(DataContext);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="event-poster p-2">
        <img src={data?.event_poster_url} alt="poster" className="rounded-md" />
      </div>
      <div className="button-group">
        <button className="btn" onClick={() => scrollToSection("about")}>
          About
        </button>
        <button className="btn" onClick={() => scrollToSection("tickets")}>
          Tickets
        </button>
        <button className="btn" onClick={() => scrollToSection("speakers")}>
          Speakers
        </button>
        <button className="btn" onClick={() => scrollToSection("workshop")}>
          Workshop
        </button>
        <button className="btn" onClick={() => scrollToSection("sponsors")}>
          Sponsors
        </button>
      </div>
      <div className="sections">
        <div id="about">
          <About />
        </div>
        <div id="tickets">
          <Ticket />
        </div>
        <div id="speakers">
          <Speakers />
        </div>
        <div id="workshop">
          <Workshops />
        </div>
        <div id="sponsors">
          <Sponsors />
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
