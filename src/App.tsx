import "swiper/css";
import { register } from "swiper/element/bundle";
import "./App.css";
import Router from "./router/Router";

register();

function App() {
  return <Router />;
}

export default App;
