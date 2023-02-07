import "../css/crew.css";
import { useLoaderData } from "react-router-dom";
import Header from "./Header";

const Crew = (props) => {
  const person = useLoaderData();
  return (
  <div id="crew">
    <Header />
    crew goes here {person.name}
  </div>
)};
export default Crew;