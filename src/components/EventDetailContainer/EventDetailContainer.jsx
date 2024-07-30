import { useContext, useEffect, useState } from "react";
import "./EventDetailContainer.css";
import { DataContext } from "../../context/DataContext";
import { BsCameraVideoFill } from "react-icons/bs";
import { MdPaid } from "react-icons/md";
import { format, parse } from "date-fns";

const convertDateString = (dateString) => {
  if (!dateString) return "";

  const parsedDate = parse(dateString, "yyyy-MM-dd HH:mm:ss", new Date());

  const day = format(parsedDate, "d");
  let daySuffix = "th";
  if (day.endsWith("1") && day !== "11") {
    daySuffix = "st";
  } else if (day.endsWith("2") && day !== "12") {
    daySuffix = "nd";
  } else if (day.endsWith("3") && day !== "13") {
    daySuffix = "rd";
  }

  const formattedDate = format(parsedDate, `MMM d'${daySuffix}', yyyy h:mm a`);

  return formattedDate;
};

const calculateTimeDifference = (endDateString) => {
  if (!endDateString) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  const endDate = parse(endDateString, "yyyy-MM-dd HH:mm:ss", new Date());
  const now = new Date();

  const totalSeconds = Math.floor((endDate - now) / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
};

const EventDetailContainer = () => {
  const { data } = useContext(DataContext);

  const endDateString = `${data?.end_date} ${data?.end_time}`;
  const [timeDifference, setTimeDifference] = useState(
    calculateTimeDifference(endDateString)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeDifference(calculateTimeDifference(endDateString));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [endDateString]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="event-details-container flex flex-col gap-6 ">
      <div className="event-details-card py-2 px-3">
        <h1 className="font-bold text-2xl my-2">{data?.name}</h1>
        <div className="flex gap-6 w-full items-center">
          <p className="w-1/3 flex gap-3 items-center">
            <span>
              <BsCameraVideoFill />
            </span>{" "}
            Online
          </p>
          <p className="w-1/3 flex gap-3 items-center">
            <span>
              <MdPaid />
            </span>{" "}
            Paid
          </p>
        </div>
        <div className="inline-block my-2  w-full items-center">
          <p className="w-1/3 inline  items-center font-medium text-lg  mr-2 ">Event Live Link :</p>
          <p className="w-1/3 inline   items-center">
            <a
              href={data?.event_live_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Open streaming website
            </a>
          </p>
        </div>
        <div className="inline-block my-2 w-full items-center">
          <p className="inline items-center mr-2  flex-wrap">Date :</p>
          <p className="inline  flex-wrap">
            <span>
              <span>
                {convertDateString(`${data?.start_date} ${data?.start_time}`)}{" "}
              </span>
              <span></span>
            </span>
            -
            <span className="mx-2">
              <span>
                {convertDateString(`${data?.end_date} ${data?.end_time}`)}{" "}
              </span>
            </span>
          </p>
        </div>
        <div className="event-starts flex flex-col gap-2 my-3">
          <p className="text-xl">EVENT STARTS IN</p>
          <strong  className=" font-bold text-2xl " >
            {timeDifference.days}D : {timeDifference.hours}H :{" "}
            {timeDifference.minutes}M : {timeDifference.seconds}S
          </strong>
        </div>
      </div>
    </div>
  );
};

export default EventDetailContainer;
