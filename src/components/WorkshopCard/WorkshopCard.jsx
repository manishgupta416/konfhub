import PropTypes from "prop-types";
import { BsCalendarEvent } from "react-icons/bs";

import "./WorkshopCard.css";
import { useState } from "react";

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
  const { image, title, eventDate, speakerDetails } = data;
  return (
    <div className="workshop-card py-2 px-1">
      <div className="workshop-image">
        <img src={image} className="h-full w-full object-contain" alt="" />
      </div>
      <div className="workshop-details flex flex-col justify-between gap-2">
        <h3 className="workshop-titl h-11 text-ellipsis">{title}</h3>
        <p className="event-date flex gap-2 items-center">
          <span>
            <BsCalendarEvent />
          </span>{" "}
          {eventDate}
        </p>
        <div className="view-more flex relative ">
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
        </div>
      </div>
    </div>
  );
};

WorkshopCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default WorkshopCard;
