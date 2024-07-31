import EventDetailContainer from "../../components/EventDetailContainer/EventDetailContainer";
import EventDetails from "../../components/EventDetails/EventDetails";
import { FaExternalLinkAlt } from "react-icons/fa";

import "./Home.css";
import HostDetails from "../../components/HostDetails/HostDetails";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="main-container flex flex-col gap-5 p-2 relative sticky-container ">
      <div className="relative">
        <Navbar />
      </div>
      <div className=" gap-7 p-5 flex flex-col lg:flex-row md:flex-col sm:flex-col xs:flex-col ">
        <div className="left-side p-4 pt-0   ">
          <EventDetails />
        
        </div>
        <div  className="right-side hide-content  flex flex-col  sticky-container  ">
          <div className="sticky flex flex-col gap-5 ">
            <EventDetailContainer />
            <button className="buy-btn">Buy Now</button>
            <a href="#">
              <button className="official-btn flex gap-6 items-center justify-center w-full">
                <span>
                  <FaExternalLinkAlt />
                </span>
                Official Website
              </button>
            </a>
            <HostDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
