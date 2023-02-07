import "../css/destination.css";
import { useLoaderData } from "react-router-dom";

const Destination = (props) => {
  const place = useLoaderData();
  return (
  <div>
    Destination goes here
    {place.name}
  </div>
)};
export default Destination;