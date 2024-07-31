import PropTypes from "prop-types";
import TicketCard from "../TicketCard/TicketCard";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import "./AccordionBody.css";

const AccordionBody = ({ item, isOpen, onClick }) => {
  return (
    <div className="flex flex-col gap-4">
      <div
        onClick={onClick}
        className="flex flex-col  items-center justify-between w-full accordion-header px-4 py-3 "
      >
       <div className="flex items-center justify-between w-full  text-lg font-medium ">
       {item.categoryTitle}
       <span>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
       </div> 
        {isOpen && (
        <div
          
          className="flex flex-col gap-6 my-4 rounded-lg px-4 py-3 acc-body"
        >
          <p className="my-3 text-lg">{item.categoryDescription}</p>
          {item.tickets.map((ticket, index) => (
            <TicketCard key={index} ticketData={ticket} />
          ))}
        </div>
      )}
      </div>
      
    </div>
  );
};

export default AccordionBody;
AccordionBody.propTypes = {
  item: PropTypes.node.isRequired,
  isOpen: PropTypes.node.isRequired,
  onClick: PropTypes.node.isRequired,
};
