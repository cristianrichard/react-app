import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({ children }) => {

   const [data, setData] = useState([]);

   useEffect(() => {
      axios("data.json").then((response) => setData(response.data))  /*Más adelante busco una api que sea de productos*/
   }, [])

   return (
      <dataContext.Provider value={{ data }}>
         {children}
      </dataContext.Provider>
   )
}

export default DataProvider;