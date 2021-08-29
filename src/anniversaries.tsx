import * as b from "bobril";
import moment from "moment";
import { assertNever } from "bobril";

export function Anniversaries(p: { eventDate: Date }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "max-content max-content max-content",
        gap: "10px",
      }}
    >
      <Anniversary eventDate={p.eventDate} unit="years" />
      <Anniversary eventDate={p.eventDate} unit="months" />
      <Anniversary eventDate={p.eventDate} unit="days" />
      <Anniversary eventDate={p.eventDate} unit="hours" />
      <Anniversary eventDate={p.eventDate} unit="minutes" />
      <Anniversary eventDate={p.eventDate} unit="seconds" />
    </div>
  );
}

function Anniversary({ eventDate, unit }: { eventDate: Date; unit: TimeUnit }) {
  const event = moment(eventDate);
  const now = moment(new Date());
  const exact = now.diff(event, unit, true);
  const next = Math.ceil(exact);
  const anniversary = roundUp(next);
  const date = getUpdatedTime(eventDate, anniversary, unit);
  return (
    <>
      <div>
        {Math.round(exact * 100) / 100} {unit}.
      </div>
      <div>
        Next ({anniversary} {unit}) anniversary:
      </div>
      <div> {date.toLocaleDateString()}</div>
    </>
  );
}

function roundUp(n: number): number {
  if (n <= 10) return n;
  return 10 * roundUp(Math.ceil(n / 10));
}

type TimeUnit = "years" | "months" | "days" | "hours" | "minutes" | "seconds";

function getUpdatedTime(date: Date, count: number, unit: TimeUnit) {
  const d = new Date(date);
  switch (unit) {
    case "years":
      d.setFullYear(d.getFullYear() + count);
      break;
    case "months":
      d.setMonth(d.getMonth() + count);
      break;
    case "days":
      d.setDate(d.getDate() + count);
      break;
    case "hours":
      d.setHours(d.getHours() + count);
      break;
    case "minutes":
      d.setMinutes(d.getMinutes() + count);
      break;
    case "seconds":
      d.setSeconds(d.getSeconds() + count);
      break;
    default:
      assertNever(unit);
  }
  return d;
}
