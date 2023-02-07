import "../css/technology.css";
import { useLoaderData } from "react-router-dom";

const Technology = (props) => {
  const device = useLoaderData();
  console.log(device);
  return (
  <div>
    technology goes here
    {device.name}
  </div>
)};
export default Technology;