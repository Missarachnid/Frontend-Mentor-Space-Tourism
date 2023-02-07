import "../css/crew.css";
import { useLoaderData } from "react-router-dom";

const Crew = (props) => {
  const person = useLoaderData();
  return (
  <div>
    crew goes here {person.name}
  </div>
)};
export default Crew;