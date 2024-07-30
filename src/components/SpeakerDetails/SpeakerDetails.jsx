import PropTypes from "prop-types";
import { useState } from "react";
import "./SpeakerDetails.css";
import { Drawer } from "../Drawer/Drawer";

const SpeakerDetails = ({ speakerDetails }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <div className="speaker-card lg:flex-row md:flex-col sm:flex-col flex gap-6 py-3 px-2 lg:w-1/2 md:w-1/2 sm:w-full">
        <div className="speaker-img ">
          <img className="rounded-lg" src={speakerDetails?.image} alt="" onClick={toggleDrawer} />
        </div>
        <div className="speaker-details flex gap-1 flex-col">
          <div className="details" onClick={toggleDrawer}>
            <div className="speaker-name text-lg font-medium">{speakerDetails.name}</div>
            <div className="speaker-title">{speakerDetails.title}</div>
            <div className="speaker-company">{speakerDetails.company}</div>
          </div>
          <div className="social-links flex gap-3 my-3 items-center">
            <a
              href={speakerDetails.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://dev.konfhub.com/img/facebook01.svg" alt="" />
            </a>
            <a
              href={speakerDetails.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://dev.konfhub.com/img/twitter-mini.svg" alt="" />
            </a>
            <a
              href={speakerDetails.socials.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://dev.konfhub.com/img/linkedin01.svg" alt="" />
            </a>
            <a
              href={speakerDetails.socials.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://dev.konfhub.com/img/Website01.svg" alt="" />
            </a>
          </div>
        </div>
        <Drawer isOpen={drawerOpen} onClose={toggleDrawer} >
        <div className="flex gap-10 items-center mb-6">  <div className="speaker-img">
            <img src={speakerDetails?.image} alt="" onClick={toggleDrawer} />
          </div>
          <div className="speaker-details flex gap-1 flex-col">
            <div className="details" onClick={toggleDrawer}>
              <div className="speaker-name text-lg font-medium ">{speakerDetails.name}</div>
              <div className="speaker-title">{speakerDetails.title}</div>
              <div className="speaker-company">{speakerDetails.company}</div>
            </div>
            <div className="social-links flex gap-3 my-3 items-center">
              <a
                href={speakerDetails.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://dev.konfhub.com/img/facebook01.svg" alt="" />
              </a>
              <a
                href={speakerDetails.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://dev.konfhub.com/img/twitter-mini.svg"
                  alt=""
                />
              </a>
              <a
                href={speakerDetails.socials.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://dev.konfhub.com/img/linkedin01.svg" alt="" />
              </a>
              <a
                href={speakerDetails.socials.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://dev.konfhub.com/img/Website01.svg" alt="" />
              </a>
            </div>
            
          </div> </div>  
          <p>This is the description of speaker</p>
      
        </Drawer>
      </div>
    </>
  );
};

export default SpeakerDetails;

SpeakerDetails.propTypes = {
  speakerDetails: PropTypes.node.isRequired,
};
