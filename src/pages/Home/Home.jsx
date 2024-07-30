import EventDetailContainer from "../../components/EventDetailContainer/EventDetailContainer";
import EventDetails from "../../components/EventDetails/EventDetails";
import { FaExternalLinkAlt } from "react-icons/fa";

import "./Home.css";
import HostDetails from "../../components/HostDetails/HostDetails";
const Home = () => {
  return (
    <div className="flex gap-7">
      <div className="left-side">
        <EventDetails />
      </div>
      <div className="right-side flex flex-col gap-6">
        Right Side
        <EventDetailContainer />
        <button className="buy-btn">Buy Now</button>
        <a href="#">
          <button className="official-btn flex gap-6 items-center justify-center w-full">
            {" "}
            <span>
              <FaExternalLinkAlt />
            </span>
            Official Website
          </button>
        </a>
        <HostDetails />
       
      </div>
    </div>
  );
};

export default Home;
