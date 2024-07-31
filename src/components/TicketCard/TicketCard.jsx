import PropTypes from "prop-types";
import { SlLocationPin } from "react-icons/sl";

import "./TicketCard.css";
const TicketCard = ({ ticketData }) => {
  const {
    title,
    description,
    venue: { name, address, additionalDetails },
    availability: { till },
    price,
    action,
  } = ticketData;

  return (
    <div className="p-4 bg-white shadow rounded ticket-card flex flex-col card ">
      <h1 className="ticket-name text-lg font-medium mb-2">{title}</h1>
      <p className="ticket-desc my-2">{description}</p>
      <p className="event-location my-2">
        <span>{name}</span>
        <br />
        <a href="#" target="_blank" className="text-blue-950 flex gap-1 items-center mt-2" rel="noopener noreferrer">
        <span><SlLocationPin /></span>
        {address}
        </a>
      </p>
      <p className="event-details my-2">{additionalDetails}</p>
      <p className="event-available px-2 py-1 text-sm rounded-md w-fit">Available Till: {till}</p>
      <div className="flex  items-center down justify-between my-4">
        <p className="ticket-price text-3xl font-medium my-2">{price}</p>
        <button className="bg-black text-white  px-6 py-2 flex justify-center items-start text-center rounded">
          {action}
        </button>
      </div>
    </div>
  );
};

TicketCard.propTypes = {
  ticketData: PropTypes.node.isRequired,
};

export default TicketCard;
