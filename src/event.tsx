import * as b from "bobril";
import { FormInput, FormLabel } from "bobrilstrap";
import { Anniversaries } from "./anniversaries";
import { DatePickerFormFields } from "./datepicker";
import { Form } from "./form";
import { useDateInLocalStorage, useLocalStorage } from "./localStorage";

export function EventDetail(p: { id: string }) {
  const [name, setName] = useLocalStorage(`name-${p.id}`, () => "");
  const [date, setDate] = useDateInLocalStorage(
    `date-${p.id}`,
    () => new Date()
  );
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
        <Form>
          <FormLabel for="name">Event name</FormLabel>
          <FormInput type="text" onChange={setName} value={name} />
          <DatePickerFormFields initialDate={date} setDate={setDate} />
        </Form>
        {date.toLocaleDateString()}
      </div>
      <Anniversaries eventDate={date} />
    </div>
  );
}

export function getNumberOfEvents(): number {
  return new Array<number>(localStorage.length).fill(0).reduce((len, _, i) => {
    const key = localStorage.key(i)!;
    const match = /(date|name)-([0-9]+)/.exec(key);
    console.log(key, match);
    return !match ? len : Math.max(len, +match[2] + 1);
  }, 0);
}
