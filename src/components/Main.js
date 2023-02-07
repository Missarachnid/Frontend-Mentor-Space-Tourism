import "../css/home.css";
import { useRoutes } from "react-router-dom";
import data from "../data.json";
import Home from "./Home";
import Crew from "./Crew";
import Technology from "./Technology";
import Destination from "./Destination";


function filterRequest(section, req){
  let catId = `${section}Id`;
  //removes hyphen or underscore
  let selected = req[catId].replaceAll("_", " ").replaceAll("-", " ");
  //console.log(catId);
  let index;
  //console.log(data[section]);

  for(let i = 0; i < data[section].length; i++){
    // deals with incorrect capitalization
    if((data[section][i].name).toLowerCase() === (selected).toLowerCase()){
      index = i;
      break;
    } else {
      //fail routes to 1st item in category
      index = 0;
    }
  }
return data[section][index];
}




const Main = (props) => {
  let routes = useRoutes(
    [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/crew",
        element: <Crew/>,
        loader: () => {
          return data.crew[0];
        }
      },
      {
        path: "/crew/:crewId",
        element: <Crew />,
        loader: ({params})=> {
          return filterRequest("crew", params);
        }
      },
      {
        path: "/technology",
        element: <Technology />,
        loader: () => {
          return data.technology[0];
        }
      },
      {
        path: "/technology/:technologyId",
        element: <Technology />,
        loader: ({params})=> {
          return filterRequest("technology", params);
        }
      },
      {
        path: "/destination",
        element: <Destination />,
        loader: () => {
          return data.destinations[0];
        }
      },
      {
        path: "/destination/:destinationsId",
        element: <Destination />,
        loader: ({params})=> {
          return filterRequest("destinations", params);
        }
      }
    ]);
  
  return (
  routes
)};
export default Main;