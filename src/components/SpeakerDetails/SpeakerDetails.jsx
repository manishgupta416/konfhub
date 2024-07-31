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
      <div className="speaker-card flex flex-col md:flex-row gap-6 py-3 px-2 w-full md:w-1/2 lg:w-1/2 xl:w-1/3">
      <div className="speaker-img cursor-pointer flex-shrink-0" onClick={toggleDrawer}>
          <img className="rounded-lg w-full md:w-48 lg:w-56 h-auto" src={speakerDetails?.image} alt="" />
        </div>
        <div className="speaker-details flex flex-col gap-2 flex-grow">
          <div className="details cursor-pointer" onClick={toggleDrawer}>
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
        <Drawer isOpen={drawerOpen} onClose={toggleDrawer}>
         <div className="flex flex-col items-start">
         <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
            <div className="speaker-img">
              <img className="rounded-lg" src={speakerDetails?.image} alt="" />
            </div>
            <div className="speaker-details flex flex-col gap-2">
              <div className="details">
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
          </div>
          <p>This is the description of the speaker.</p></div> 
        </Drawer>
      </div>

    </>
  );
};

export default SpeakerDetails;

SpeakerDetails.propTypes = {
  speakerDetails: PropTypes.node.isRequired,
};
