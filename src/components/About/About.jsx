import { useContext } from "react";
import parse from "html-react-parser";
import DOMPurify from "dompurify";
import "./About.css";
import { DataContext } from "../../context/DataContext";

const About = () => {
  const { data } = useContext(DataContext);
  const sanitizedDescription = DOMPurify.sanitize(data?.description, {
    ALLOWED_TAGS: [
      "iframe",
      "p",
      "strong",
      "em",
      "img",
      "table",
      "tr",
      "td",
      "th",
      "colgroup",
      "col",
    ],
  });
  return (
    <>
      <div className="flex-col gap-10 py-10">
        <strong className="font-bold text-2xl my-6">ABOUT EVENT</strong>
        <p className="desc flex flex-col text-lg gap-10 my-10">{parse(sanitizedDescription)}</p>
      </div>
    </>
  );
};

export default About;
