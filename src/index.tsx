import * as b from "bobril";
import "bootstrap/dist/css/bootstrap.min.css";
import { EventDetail } from "./event";

b.init(() => <App />);

function App() {
  return <EventDetail />;
}
