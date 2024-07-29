import PropTypes from "prop-types";
import TicketCard from "../TicketCard/TicketCard";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import "./AccordionBody.css";

const AccordionBody = ({ item, isOpen, onClick }) => {
  return (
    <div className="">
      <div
        onClick={onClick}
        className="flex items-cente justify-between w-full accordion-header py-2 px-1"
      >
        {item.categoryTitle}
        <span>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
      </div>
      {isOpen && (
        <div
          style={{ padding: "10px", border: "1px solid #ccc" }}
          className="my-4"
        >
          <p>{item.categoryDescription}</p>
          {item.tickets.map((ticket, index) => (
            <TicketCard key={index} ticketData={ticket} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AccordionBody;
AccordionBody.propTypes = {
  item: PropTypes.node.isRequired,
  isOpen: PropTypes.node.isRequired,
  onClick: PropTypes.node.isRequired,
};
