import ScheduleDesktop from "./schedule-desktop/ScheduleDesktop";
import "./Schedule.css";
import ScheduleView from "./ScheduleView";

const rasporedLutador = [
  {
    name: "Ponedeljak",
    times: [
      { name: "GI Basic", time: "19:00 - 20:00" },
      { name: "Gi Advanced", time: "20:00 - 21:00" },
      { name: "NO Gi Basic", time: "21:00 - 22:00" },
    ],
  },
  {
    name: "Utorak",
    times: [
      { name: "Kondicija", time: "11:00 - 12:00" },
      { name: "Boks", time: "19:00 - 20:00" },
      { name: "Kik Boks", time: "20:00 - 21:00" },
    ],
  },
  {
    name: "Sreda",
    times: [
      { name: "GI Basic", time: "19:00 - 20:00" },
      { name: "Gi Advanced", time: "20:00 - 21:00" },
      { name: "NO Gi Basic", time: "21:00 - 22:00" },
    ],
  },
  {
    name: "Četvrtak",
    times: [
      { name: "Kondicija", time: "11:00 - 12:00" },
      { name: "Boks", time: "19:00 - 20:00" },
      { name: "Kik Boks", time: "20:00 - 21:00" },
    ],
  },
  {
    name: "Petak",
    times: [
      { name: "GI Basic", time: "19:00 - 20:00" },
      { name: "Gi Advanced", time: "20:00 - 21:00" },
      { name: "NO Gi Basic", time: "21:00 - 22:00" },
    ],
  },

  {
    name: "Subota",
    times: [
      { name: "Kik Boks - sparing", time: "12:00 - 13:00" },
      { name: "Boks", time: "13:00 - 14:00" },
    ],
  },
];

const Schedule = () => {
  return (
    <div className="schedule" id="schedule">
      <h3>Raspored</h3>
      <h2>Odaberite trening</h2>
      <ScheduleView schedule={rasporedLutador} />
      <ScheduleDesktop data={rasporedLutador} />
    </div>
  );
};

export default Schedule;
