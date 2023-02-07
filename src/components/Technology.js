import "../css/technology.css";
import { useLoaderData } from "react-router-dom";
import Header from "./Header";

const Technology = (props) => {
  const device = useLoaderData();
  console.log(device);
  return (
  <div>
    <Header />
    technology goes here
    {device.name}
  </div>
)};
export default Technology;