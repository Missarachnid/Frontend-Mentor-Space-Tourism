import "../css/destination.css";
import { useLoaderData } from "react-router-dom";
import Header from "./Header";

const Destination = (props) => {
  const place = useLoaderData();
  return (
  <div>
    <Header />
    Destination goes here
    {place.name}
  </div>
)};
export default Destination;