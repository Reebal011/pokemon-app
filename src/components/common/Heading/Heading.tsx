import React from "react";
import "./Heading.css";
import { FUNCTION } from "../../../utils";

interface IHeadingProps {
  heading: string;
}

const Heading: React.FC<IHeadingProps> = ({ heading }) => {
  return <h2>{FUNCTION.capitalizeFirstLetter(heading)}</h2>;
};

export default Heading;
