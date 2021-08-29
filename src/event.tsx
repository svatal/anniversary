import * as b from "bobril";
import { Anniversaries } from "./anniversaries";
import { DatePicker } from "./datepicker";
import { useDateInLocalStorage } from "./localStorage";

export function EventDetail() {
  const [date, setDate] = useDateInLocalStorage("date", () => new Date());
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
          <DatePicker initialDate={date} setDate={setDate} />
        </div>
        {date.toLocaleDateString()}
      </div>
      <Anniversaries eventDate={date} />
    </div>
  );
}
