import "./Sponsors.css";
import DOMPurify from "dompurify";
import { DataContext } from "../../context/DataContext";
import parse from "html-react-parser";
import { useContext } from "react";

const Sponsors = () => {
  const { data } = useContext(DataContext);
  const sanitizedDescription = DOMPurify.sanitize(
    data?.sponsor_section_description,
    {
      ALLOWED_TAGS: ["p", "div"],
    }
  );
  return (
    <div className="my-6 mb-9">
      <h1 className="font-bold text-2xl my-3">{data?.sponsor_section_title}</h1>
      <p className="my-5 text-lg">{parse(sanitizedDescription)}</p>
      <div className="sponsor-img my-6">
        <a href="#" target="_blank" rel="noopener noreferrer" className="my-5">
          <img
            src="https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F09%2F1717977584480-2a58c92e-ac5f-4ebd-9570-d6bcfc792dc2.png&w=1920&q=75"
            alt=""
            className="object-cover h-full"
          />
        </a>
      </div>
      <div className="sponsor-category flex flex-col gap-5 mt-9 ">
        <div className="sponsor-title flex items-center gap-6 ">
          <p className="font-bold text-2xl my-3">SPONSOR CATEGORY</p>{" "}
          <hr className="hr-line" />
        </div>
        <div className="category-img">
          <a href="#" target="_blank" rel="noopener noreferrer" className="w-full">
            <img
              src="https://dev-media.konfhub.com/sponsors/2024/June/10/1717977635909-75bb1d01-51a2-4af1-82cd-72d587192692.jpg"
              alt=""
              className="object-cover w-full h-full"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
