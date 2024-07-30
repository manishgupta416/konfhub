import "./Ticket.css";
import { ticketCardData } from "../../data";
import TicketCard from "../TicketCard/TicketCard";
import Accordion from "../Accordion/Accordion";

const Ticket = () => {
  return (
    <>
      <div className="flex-col gap-10 ticket-section">
        <h1 className="font-bold text-2xl my-6">TICKETS</h1>
        <div className="tickets-cards flex flex-col py-3 px-6 gap-10">
          {ticketCardData.map((ticketData) => (
            <TicketCard ticketData={ticketData} key={ticketData.id} />
          ))}

          <Accordion />
        </div>
      </div>
    </>
  );
};

export default Ticket;
