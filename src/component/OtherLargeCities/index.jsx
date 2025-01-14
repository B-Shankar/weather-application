import { useContext } from "react";

import ThemeContext from "../../context/ThemeContext";
import OtherLargeCitiesItem from "../OtherLargeCitiesItem";

import "./index.css";

const OtherLargeCities = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`other-cities-main other-cities-${theme}`}>
      <h1 className="other-cities-heading">Other Metropolitan Cities</h1>
      <ul className="other-city-list-container">
        <OtherLargeCitiesItem cityName="Chennai" />
        <div className={`vertical-separator-${theme}`}></div>
        <OtherLargeCitiesItem cityName="Bengaluru" />
        <div className={`vertical-separator-${theme}`}></div>
        <OtherLargeCitiesItem cityName="Kochi" />
        <div className={`vertical-separator-${theme}`}></div>
        <OtherLargeCitiesItem cityName="Pune" />
        <div className={`vertical-separator-${theme}`}></div>
        <OtherLargeCitiesItem cityName="Mumbai" />
      </ul>
    </div>
  );
};

export default OtherLargeCities;
