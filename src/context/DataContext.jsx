import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://dev-api.konfhub.com/event/public/konfhub-frontend-evaluation-task"
      );
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <DataContext.Provider value={{ isContext: "working", data }}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
