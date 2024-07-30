import { useContext } from "react";
import "./Workshops.css";
import DOMPurify from "dompurify";
import { DataContext } from "../../context/DataContext";
import parse from "html-react-parser";
import { workshopDetails } from "../../data";
import WorkshopCard from "../WorkshopCard/WorkshopCard";
const Workshops = () => {
  const { data } = useContext(DataContext);
  const sanitizedDescription = DOMPurify.sanitize(
    data?.workshop_section_description,
    {
      ALLOWED_TAGS: ["p", "div"],
    }
  );
  return (
    <div>
      <h1 className="font-bold text-2xl my-3">{data?.workshop_section_title}</h1>
      <p className="my-7 text-lg">{parse(sanitizedDescription)}</p>
      <div className="flex flex-wrap gap-5">
        {workshopDetails.map((data) => (
          <WorkshopCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Workshops;
