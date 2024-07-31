import PropTypes from "prop-types";
import { BsCalendarEvent } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";

import "./WorkshopCard.css";
import { useState } from "react";
import { Drawer } from "../Drawer/Drawer";

const Tooltip = ({ children, tooltipText }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className="absolute bottom-full mb-2 w-max p-2 bg-gray-800 text-white text-xs rounded shadow-lg">
          {tooltipText}
        </div>
      )}
    </div>
  );
};
Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  tooltipText: PropTypes.string.isRequired,
};

const WorkshopCard = ({ data }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { image, title, eventDate, speakerDetails, desc, location, url } = data;

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <div className="workshop-card flex flex-col gap-4 py-3 px-5 col-12 col-md-6 col-lg-4 col-xxl-4 w-full md:w-1/2 lg:w-1/2 xl:w-1/3">
      <div className="workshop-image">
        <img src={image} className="h-full w-full object-contain" alt="" />
      </div>
      <div className="workshop-details flex flex-col justify-between gap-2">
        <h3 className="workshop-title h-11 overflow-hidden whitespace-nowrap  text-ellipsis font-medium text-xl w-full">
          {title}
        </h3>
        <p className="event-date inline-block  items-center my-4  whitespace-break-spaces ">
          <span className="inline-block mr-1 mt-1">
            <BsCalendarEvent />
          </span>{" "}
          <span className="inline "> {eventDate}</span>
        </p>
        <div className="view-more flex relative items-center  w-full ">
          {speakerDetails.map((details) => {
            const style = {
              left: details.id > 1 ? `${(details.id - 1) * -5}px` : "0px",
              zIndex: speakerDetails.length + details.id,
            };
            return (
              <div
                className="speaker-image flex relative"
                key={details.id}
                style={style}
              >
                <Tooltip tooltipText={details.name}>
                  <img
                    src={details.image}
                    alt={details.name}
                    className="rounded-full"
                  />
                </Tooltip>
              </div>
            );
          })}
          <button
            className="bg-black text-white text-center flex ml-auto justify-end px-4 py-2 m-2 rounded-lg"
            onClick={toggleDrawer}
          >
            View Details
          </button>
        </div>
      </div>
      <Drawer isOpen={drawerOpen} onClose={toggleDrawer}>
        <div className="workshop-details flex flex-col justify-between gap-7">
          <h3 className="workshop-titl h-11 text-ellipsis text-2xl font-medium">
            {title}
          </h3>
          <p className="event-date flex gap-2 items-start">
            <span className="text-xl font-bold icon-m">
              <BsCalendarEvent />
            </span>{" "}
            <p className="text-xl font-medium  text-gray-500"> {eventDate}</p>
          </p>
          {location && (
            <a
              href="#"
              target="_blank"
              className="text-blue-950 flex gap-1 items-start mt-2"
              rel="noopener noreferrer"
            >
              <span className="icon-m">
                <SlLocationPin />
              </span>
              {location}
            </a>
          )}
          {url && (
            <div className="speaker-url">
              <a
                href={url}
                className="text-blue-950 text-xl font-medium"
                target="_blank"
                rel="noopener noreferrer "
              >
                {url}
              </a>
            </div>
          )}
          <p className="event-desc">{desc}</p>
          <h2 className=" text-2xl font-medium">SPEAKERS</h2>
          <div className="flex gap-5 flex-row flex-wrap">
            {" "}
            {speakerDetails?.map((speakerDetails) => (
              <div
                key={speakerDetails.id}
                className=" speaker-card item-center  lg:flex-row md:flex-col sm:flex-col flex gap-6 py-3 px-2 lg:w-1/2 md:w-1/2 sm:w-full"
              >
                <div className="ws-speaker-img ">
                  <img
                    src={speakerDetails?.image}
                    alt=""
                    onClick={toggleDrawer}
                    className="rounded-lg"
                  />
                </div>
                <div className="speaker-details flex gap-1 flex-col">
                  <div className="details" onClick={toggleDrawer}>
                    <div className="speaker-name text-lg font-medium">
                      {speakerDetails?.name}
                    </div>
                    <div className="speaker-title">{speakerDetails?.title}</div>
                    <div className="speaker-company">
                      {speakerDetails?.company}
                    </div>
                  </div>
                  <div className="social-links flex gap-3 my-3 items-center">
                    <a
                      href={speakerDetails?.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://dev.konfhub.com/img/facebook01.svg"
                        alt=""
                      />
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
                      <img
                        src="https://dev.konfhub.com/img/linkedin01.svg"
                        alt=""
                      />
                    </a>
                    <a
                      href={speakerDetails.socials.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://dev.konfhub.com/img/Website01.svg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="view-more flex relative items-center  w-full "></div>
        </div>
      </Drawer>
    </div>
  );
};

WorkshopCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default WorkshopCard;
