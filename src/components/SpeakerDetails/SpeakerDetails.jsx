import PropTypes from "prop-types";
import "./SpeakerDetails.css";
const SpeakerDetails = ({ speakerDetails }) => {
  console.log(speakerDetails, "speakerDetails");
  return (
    <>
      <div className="speaker-card flex flex-col gap-6 py-3 px-2">
        <div className="speaker-img">
          <img src={speakerDetails?.image} alt="" />
        </div>
        <div className="speaker-details">
          <div className="speaker-name">{speakerDetails.name}</div>
          <div className="speaker-title">{speakerDetails.title}</div>
          <div className="speaker-company">{speakerDetails.company}</div>
          <div className="social-links">
            <a
              href={speakerDetails.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://dev.konfhub.com/img/facebook01.svg" alt="" />
            </a>
            <a
              href={speakerDetails.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://dev.konfhub.com/img/twitter-mini.svg" alt="" />
            </a>
            <a
              href={speakerDetails.socials.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://dev.konfhub.com/img/linkedin01.svg" alt="" />
            </a>
            <a
              href={speakerDetails.socials.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://dev.konfhub.com/img/Website01.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpeakerDetails;

SpeakerDetails.propTypes = {
  speakerDetails: PropTypes.node.isRequired,
};
