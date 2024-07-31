import { useContext, useState } from "react";
import "./EventDetails.css";
import { DataContext } from "../../context/DataContext";
import About from "../About/About";
import Ticket from "../Ticket/Ticket";
import Sponsors from "../Sponsors/Sponsors";
import Workshops from "../Workshops/Workshops";
import Speakers from "../Speakers/Speakers";
import EventDetailContainer from "../EventDetailContainer/EventDetailContainer";
import { FaExternalLinkAlt } from "react-icons/fa";
import HostDetails from "../HostDetails/HostDetails";

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
      <div className="lg:none block show">
        <EventDetailContainer/>
        <button className="buy-btn my-3 w-full">Buy Now</button>
            <a href="#" className="my-2">
              <button className="official-btn flex gap-6 items-center justify-center w-full">
                <span>
                  <FaExternalLinkAlt />
                </span>
                Official Website
              </button>
            </a>
      </div>
      <div className="button-group">
        <button
          className={`btn  ${
            activeSection === "about" ? "active" : ""
          }`}
          onClick={() => scrollToSection("about")}
        >
          About
        </button>
        <button
          className={`btn  ${
            activeSection === "tickets" ? "active" : ""
          }`}
          onClick={() => scrollToSection("tickets")}
        >
          Tickets
        </button>
        <button
          className={`btn  ${
            activeSection === "speakers" ? "active" : ""
          }`}
          onClick={() => scrollToSection("speakers")}
        >
          This is speakers section

        </button>
        <button
          className={`btn  ${
            activeSection === "workshop" ? "active" : ""
          }`}
          onClick={() => scrollToSection("workshop")}
        >
         This is workshop section
        
        </button>
        <button
          className={`btn  ${
            activeSection === "sponsors" ? "active" : ""
          }`}
          onClick={() => scrollToSection("sponsors")}
        >
          This is event sponsors
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
        <div className="show lg:none">
          <HostDetails />
          </div>
      </div>
    </div>
  );
};

export default EventDetails;
