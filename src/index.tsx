import * as b from "bobril";
import { Button } from "bobrilstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { EventDetail, getNumberOfEvents } from "./event";

b.init(() => <App />);

function App() {
  const [eventCount, setEventCount] = b.useState(() =>
    Math.max(getNumberOfEvents(), 1)
  );
  return (
    <div style={{ margin: 20 }}>
      {new Array(eventCount).fill(0).map((_, i) => (
        <EventDetail id={i.toString()} />
      ))}
      <Button variant="primary" onClick={() => setEventCount((c) => c + 1)}>
        Add another event
      </Button>
    </div>
  );
}
