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
      <div className="event-poster p-2 ">
        <img src={data?.event_poster_url} alt="poster" className="rounded-md" />
      </div>
      <div className="button-group">
        <button
          className="btn "
          id="About"
          onClick={() => scrollToSection("About")}
        >
          About
        </button>
        <button
          className="btn "
          id="Tickets"
          onClick={() => scrollToSection("About")}
        >
          Tickets
        </button>
        <button
          className="btn "
          id="speakers"
          onClick={() => scrollToSection("speakers")}
        >
          This is speakers section
        </button>
        <button
          className="btn "
          id="workshop"
          onClick={() => scrollToSection("workshop")}
        >
          This is workshop section
        </button>
        <button
          className="btn "
          id="sponsors"
          onClick={() => scrollToSection("sponsors")}
        >
          This is event sponsors
        </button>
      </div>
      <div className="sections">
        <div className="" id="About">
          <About />
        </div>
        <div className="" id="Tickets">
          <Ticket />
        </div>
        <div className="" id="speakers">
          <Speakers />
        </div>
        <div className="" id="workshop">
          <Workshops />
        </div>
        <div className="" id="sponsors">
          <Sponsors />
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
