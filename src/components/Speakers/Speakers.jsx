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
      <h1 className="font-bold text-2xl my-6">{data?.speaker_section_title}</h1>
      <p className="my-3 text-lg">{parse(sanitizedDescription)}</p>
      <div className="speakers-list flex  gap-4 justify-between">
        {speakerDetails.map((speaker) => (
          <SpeakerDetails key={speaker.id} speakerDetails={speaker} />
        ))}
      </div>
    </div>
  );
};

export default Speakers;
