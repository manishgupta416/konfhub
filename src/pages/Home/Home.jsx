import EventDetails from "../../components/EventDetails/EventDetails";
import "./Home.css";
const Home = () => {
  return (
    <div className="flex gap-7">
      <div className="left-side">
        <EventDetails />
      </div>
      <div className="right-side"></div>
    </div>
  );
};

export default Home;
