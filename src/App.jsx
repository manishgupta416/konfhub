import { useContext } from "react";
import { DataContext } from "./context/DataContext";
import Home from "./pages/Home/Home";

const App = () => {
  const { isContext } = useContext(DataContext);
  console.log(isContext);

  console.log(isContext);
  return (
    <div className="">
      <Home />
    </div>
  );
};

export default App;
