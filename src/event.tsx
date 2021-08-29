import * as b from "bobril";
import { Anniversaries } from "./anniversaries";
import { DatePicker } from "./datepicker";

export function EventDetail() {
  const [date, setDate] = b.useState(() => new Date());
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "max-content max-content",
        gap: "20px",
        margin: "20px",
      }}
    >
      <div>
        <div>
          <DatePicker setDate={setDate} />
        </div>
        {date.toLocaleDateString()}
      </div>
      <Anniversaries eventDate={date} />
    </div>
  );
}
