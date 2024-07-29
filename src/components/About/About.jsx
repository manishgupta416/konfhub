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
      <div className="flex-col gap-10 p-10">
        <h1>ABOUT EVENT</h1>
        <p className="desc flex-col gap-10">{parse(sanitizedDescription)}</p>
      </div>
    </>
  );
};

export default About;
