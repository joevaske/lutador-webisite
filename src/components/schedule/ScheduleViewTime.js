import React, { Fragment } from "react";
import "./ScheduleViewTime.css";

const ScheduleViewTime = ({ times }) => {
  return (
    <div className="schedule-view-time">
      {times.map((time) =>
        time.name === "space" ? (
          <Fragment>
            <div className="space"></div>
            <div className="space"></div>
          </Fragment>
        ) : (
          <div className="schedule-item" key={time.name}>
            <p className="schedule-item-name">
              {time.name}
              {/*  <span>- {time.desc} -</span> */}
            </p>
            <p className="schedule-item-name-time-count">{time.time}</p>
          </div>
        )
      )}
    </div>
  );
};

export default ScheduleViewTime;
