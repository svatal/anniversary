import * as b from "bobril";
import {
  FormDatalist,
  FormInput,
  FormLabel,
  FormOption,
  FormSelect,
} from "bobrilstrap";

export function DatePicker(p: { setDate: (date: Date) => void }) {
  const [year, setYear] = b.useState("1950");
  const [month, setMonth] = b.useState("1");
  const [day, setDay] = b.useState("1");
  const maxDay = new Date(+year, +month, +0).getDate();
  b.useEffect(() => {
    const date = new Date(+year, +month - 1, +day);
    if (!isNaN(date.getTime()) && date.getDate() === +day) {
      console.log("date change", date);
      p.setDate(date);
    }
  }, [year, month, day]);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "max-content auto",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <FormLabel for="year">Year</FormLabel>
        <FormInput
          type="datalist"
          id="year"
          list="yearOptions"
          onChange={setYear}
          value={year}
        />
        <FormDatalist id="yearOptions">
          {Array(80)
            .fill(0)
            .map((_, i) => (
              <FormOption>{i + 1950}</FormOption>
            ))}
        </FormDatalist>
        <FormLabel for="month">Month</FormLabel>
        <FormSelect id="month" onChange={setMonth} value={month}>
          {Array(12)
            .fill(0)
            .map((_, i) => (
              <FormOption>{i + 1}</FormOption>
            ))}
        </FormSelect>
        <FormLabel for="day">Day</FormLabel>
        <FormSelect id="day" onChange={setDay} value={day}>
          {Array(maxDay)
            .fill(0)
            .map((_, i) => (
              <FormOption>{i + 1}</FormOption>
            ))}
        </FormSelect>
      </div>
    </>
  );
}