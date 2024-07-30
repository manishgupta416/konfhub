import { useContext } from "react";
import parse from "html-react-parser";
import DOMPurify from "dompurify";
import "./Speakers.css";
import { DataContext } from "../../context/DataContext";
import { speakerDetails } from "../../data";
import SpeakerDetails from "../SpeakerDetails/SpeakerDetails";

const Speakers = () => {
  const { data } = useContext(DataContext);
  const sanitizedDescription = DOMPurify.sanitize(
    data?.speaker_section_description,
    {
      ALLOWED_TAGS: ["p", "div"],
    }
  );
  return (
    <div>
      <h1>{data?.speaker_section_title}</h1>
      <p className="my-4">{parse(sanitizedDescription)}</p>
      <div className="speakers-list flex gap-4 justify-between lg:flex-row md:flex-row sm:flex-col ">
        {speakerDetails.map((speakerDetails) => (
          <SpeakerDetails
            key={speakerDetails.id}
            speakerDetails={speakerDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default Speakers;
