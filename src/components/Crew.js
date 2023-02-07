import "../css/crew.css";
import { useLoaderData } from "react-router-dom";
import Header from "./Header";

const Crew = (props) => {
  const person = useLoaderData();
  return (
  <div>
    <Header />
    crew goes here {person.name}
  </div>
)};
export default Crew;