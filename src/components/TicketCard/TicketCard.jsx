import PropTypes from "prop-types";
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
      <h1 className="ticket-name text-2xl font-bold mb-2">{title}</h1>
      <p className="ticket-desc m-2">{description}</p>
      <p className="event-location m-2">
        <span>{name}</span>
        <br />
        <a href="#" target="_blank" rel="noopener noreferrer">
          {address}
        </a>
      </p>
      <p className="event-details m-2">{additionalDetails}</p>
      <p className="event-available">Available Till: {till}</p>
      <div className="flex  items-center justify-between">
        <p className="ticket-price m-2">{price}</p>
        <button className="bg-black text-white text-center px-4 py-2 m-2 rounded">
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
