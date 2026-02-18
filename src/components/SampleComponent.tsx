import React from "react";
import "../styles/components/SampleComponent.scss";
import { SampleComponentProps } from "../types/SampleComponentProps";

export const SampleComponent: React.FC<SampleComponentProps> = ({ text }) => {
  return <div className="sample-component">{text}</div>;
};

export default SampleComponent;
