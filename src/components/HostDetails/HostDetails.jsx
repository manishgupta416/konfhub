import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import "./HostDetails.css";
import parse from "html-react-parser";
import DOMPurify from "dompurify";
import { Drawer } from "../Drawer/Drawer";

const HostDetails = () => {
  const { data } = useContext(DataContext);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const sanitizedDescription = DOMPurify.sanitize(data?.organiser_info, {
    ALLOWED_TAGS: ["p", "div"],
  });
  return (
    <div className="flex flex-col gap-4">
      <strong>HOSTED BY</strong>
      <div className="host-info-card ">
        <div className="organiser-name flex gap-5">
          <img
            src={data?.organiser_image_url}
            className="rounded-full"
            alt=""
            height={35}
            width={35}
          />
          <strong>{data?.organiser_name}</strong>
        </div>
        <p onClick={toggleDrawer} className="my-4">{parse(sanitizedDescription)}</p>
        <div className="organiser-contact-details text-lg">
          <p>Contact Us On</p>
          <div className="social-links flex gap-3 my-3 items-center">
            <a
              href={data?.organiser_facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://dev.konfhub.com/img/facebook-share.svg" alt="" width={21} height={21}/>
            </a>
            <a
              href={data?.organiser_twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://dev.konfhub.com/img/twitter-pro-black.svg" alt="" width={21} height={21} />
            </a>
            <a
              href={data?.organiser_linkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://dev.konfhub.com/img/linkedin-share.svg" alt="" width={21} height={21} />
            </a>
            <a
              href={data?.organiser_website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://dev.konfhub.com/img/website-black.svg" alt=""  width={21} height={21}/>
            </a>
            <a
              href={data?.organiser_email}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://dev.konfhub.com/img/mail-share.svg" alt="" width={21} height={21} />
            </a>
            <a
              href={data?.organiser_phone}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://dev.konfhub.com/img/call-share.svg" alt="" width={21} height={21} />
            </a>
           
          </div>
        </div>
        <Drawer isOpen={drawerOpen} onClose={toggleDrawer}>
          
         <strong>About Organiser</strong>
         <div className="organiser-drawer flex flex-col gap-3 py my-7">
         <div className="organiser-name flex gap-5">
          <img
            src={data?.organiser_image_url}
            className="rounded-full"
            alt=""
            height={30}
            width={30}
          />
          <strong>{data?.organiser_name}</strong>
        </div>
        <p onClick={toggleDrawer} className="my-4">{parse(sanitizedDescription)}</p>
        <div className="organiser-contact-details flex gap-4 items-center">
          <p>Contact Us On</p>
          <div className="social-links flex gap-3 my-3 items-center">
            <a
              href={data?.organiser_facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://dev.konfhub.com/img/facebook-share.svg" alt="" className="social-imge" width={21} height={21}/>
            </a>
            <a
              href={data?.organiser_twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://dev.konfhub.com/img/twitter-pro-black.svg" alt="" className="social-imge" width={21} height={21} />
            </a>
            <a
              href={data?.organiser_linkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://dev.konfhub.com/img/linkedin-share.svg" alt="" className="social-imge" width={21} height={21} />
            </a>
            <a
              href={data?.organiser_website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://dev.konfhub.com/img/website-black.svg" alt="" className="social-imge" width={21} height={21}/>
            </a>
            <a
              href={data?.organiser_email}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://dev.konfhub.com/img/mail-share.svg" alt="" className="social-imge" width={21} height={21} />
            </a>
            <a
              href={data?.organiser_phone}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://dev.konfhub.com/img/call-share.svg" alt="" className="social-imge" width={21} height={21} />
            </a>
           
          </div>
        </div>
        </div>
          </Drawer>
      </div>
    </div>
  );
};

export default HostDetails;
