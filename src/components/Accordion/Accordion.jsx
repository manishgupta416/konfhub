import { useState } from "react";
import "./Accordion.css";
import { accordionData } from "../../data";
import AccordionBody from "../AccordionBody/AccordionBody";
const Accordion = () => {
  const [selectedIndex, isSelectedIndex] = useState([]);
  const handleItemClick = (index) => {
    if (selectedIndex.includes(index)) {
      isSelectedIndex(selectedIndex.filter((i) => i !== index));
    } else {
      isSelectedIndex([...selectedIndex, index]);
    }
  };
  return (
    <div className="flex  flex-col gap-7">
      {accordionData.map((item) => (
        <AccordionBody
          onClick={() => handleItemClick(item.id)}
          key={item.id}
          item={item}
          isOpen={selectedIndex.includes(item.id)}
        />
      ))}
    </div>
  );
};

export default Accordion;
