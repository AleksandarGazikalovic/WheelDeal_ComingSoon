import React from "react";
import "./loading.css";
import ClockLoader from "react-spinners/ClockLoader";
import { RiArrowDownDoubleLine } from "react-icons/ri";

const Loading = (props) => {
  const handleScroll = () => {
    props.parallax.current.scrollTo(1);
  };

  return (
    <>
      <div className="loading">
        <ClockLoader
          className={`${props.isLoading ? "" : "slide-top-clock"}`}
          color="#ffffff"
          size={200}
          cssOverride={{ position: "absolute" }}
        />
        <div
          className={`${
            props.isLoading ? "comingSoon" : "comingSoon slide-top"
          }`}
        >
          <p>Coming soon</p>
          <RiArrowDownDoubleLine
            className="arrow bounce"
            onClick={handleScroll}
          />
        </div>
      </div>
    </>
  );
};

export default Loading;
