import "./ScheduleView.css";
import ScheduleViewTime from "./ScheduleViewTime";

const ScheduleView = ({ schedule }) => {
  return (
    <>
      {schedule.map((schedul) => (
        <div className="schedule-view" key={schedul.name}>
          <h3>{schedul.name}</h3>
          <ScheduleViewTime times={schedul.times} />
        </div>
      ))}
    </>
  );
};

export default ScheduleView;
