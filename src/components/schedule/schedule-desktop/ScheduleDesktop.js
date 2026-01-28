import "./ScheduleDesktop.css";

const ScheduleDesktop = ({ data }) => {
  const parseTime = (timeRange) => {
    // "19:00 - 20:00" → 19 * 60
    const start = timeRange.split(" - ")[0];
    const [h, m] = start.split(":").map(Number);
    return h * 60 + m;
  };
  const allTimes = Array.from(
    new Set(data.flatMap((day) => day.times.map((t) => t.time)))
  ).sort((a, b) => parseTime(a) - parseTime(b));

  return (
    <div className="schedule-table">
      <table>
        <thead>
          <tr>
            <th>Vreme</th>
            {data.map((day) => (
              <th key={day.name}>{day.name}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {allTimes.map((time) => (
            <tr key={time}>
              {/* Leva kolona – vreme */}
              <td className="time-cell">{time}</td>

              {/* Dani */}
              {data.map((day) => {
                const training = day.times.find((t) => t.time === time);

                return (
                  <td key={day.name + time} className="training-cell">
                    {training ? training.name : ""}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleDesktop;
