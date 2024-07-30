import { useContext, useState } from "react";
import "./EventDetails.css";
import { DataContext } from "../../context/DataContext";
import About from "../About/About";
import Ticket from "../Ticket/Ticket";
import Sponsors from "../Sponsors/Sponsors";
import Workshops from "../Workshops/Workshops";
import Speakers from "../Speakers/Speakers";

const EventDetails = () => {
  const [activeSection, setActiveSection] = useState("");
  const { data } = useContext(DataContext);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      setActiveSection(id);
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="event-poster p-2 ">
        <img
          src={data?.event_poster_url}
          alt="poster"
          className="rounded-2xl object-cover poster"
        />
      </div>
      <div className="button-group">
        <button
          className={`btn font-medium ${
            activeSection === "about" ? "active" : ""
          }`}
          onClick={() => scrollToSection("about")}
        >
          About
        </button>
        <button
          className={`btn font-medium ${
            activeSection === "tickets" ? "active" : ""
          }`}
          onClick={() => scrollToSection("tickets")}
        >
          Tickets
        </button>
        <button
          className={`btn font-medium ${
            activeSection === "speakers" ? "active" : ""
          }`}
          onClick={() => scrollToSection("speakers")}
        >
          Speakers
        </button>
        <button
          className={`btn font-medium ${
            activeSection === "workshop" ? "active" : ""
          }`}
          onClick={() => scrollToSection("workshop")}
        >
          Workshop
        </button>
        <button
          className={`btn font-medium ${
            activeSection === "sponsors" ? "active" : ""
          }`}
          onClick={() => scrollToSection("sponsors")}
        >
          Sponsors
        </button>
      </div>
      <div className="sections flex flex-col gap-10">
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
